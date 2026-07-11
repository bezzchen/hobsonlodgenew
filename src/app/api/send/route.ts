import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/contact/contact";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactFormSender = "Hobson Lodge <info@hobsonlodge.co.nz>";
const recaptchaAction = "contact_form";
const recaptchaDefaultMinimumScore = 0.5;

type RecaptchaAssessmentResponse = {
  riskAnalysis?: {
    score?: number;
  };
  tokenProperties?: {
    action?: string;
    hostname?: string;
    valid?: boolean;
  };
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseRecipients(value: string | undefined) {
  return (
    value
      ?.split(",")
      .map((recipient) => recipient.trim())
      .filter(Boolean) ?? []
  );
}

function getRecaptchaMinimumScore() {
  const configuredScore = Number(process.env.RECAPTCHA_MIN_SCORE);

  if (Number.isFinite(configuredScore)) {
    return configuredScore;
  }

  return recaptchaDefaultMinimumScore;
}

function getRequestIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
}

async function createRecaptchaAssessment(
  apiKey: string,
  projectId: string,
  siteKey: string,
  token: string,
  remoteIp: string,
  userAgent: string,
) {
  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: {
          expectedAction: recaptchaAction,
          siteKey,
          token,
          userAgent,
          userIpAddress: remoteIp,
        },
      }),
    },
  );

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as RecaptchaAssessmentResponse;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const recaptchaToken =
      typeof body.recaptchaToken === "string" ? body.recaptchaToken.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 },
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Contact form verification is required." },
        { status: 400 },
      );
    }

    const recaptchaApiKey = process.env.RECAPTCHA_API_KEY;
    const recaptchaProjectId = process.env.RECAPTCHA_PROJECT_ID;
    const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!recaptchaApiKey || !recaptchaProjectId || !recaptchaSiteKey) {
      return NextResponse.json(
        { error: "Contact form verification is not configured." },
        { status: 500 },
      );
    }

    const recaptchaAssessment = await createRecaptchaAssessment(
      recaptchaApiKey,
      recaptchaProjectId,
      recaptchaSiteKey,
      recaptchaToken,
      getRequestIp(request),
      request.headers.get("user-agent") ?? "",
    );

    if (
      !recaptchaAssessment?.tokenProperties?.valid ||
      recaptchaAssessment.tokenProperties.action !== recaptchaAction ||
      typeof recaptchaAssessment.riskAnalysis?.score !== "number" ||
      recaptchaAssessment.riskAnalysis.score < getRecaptchaMinimumScore()
    ) {
      return NextResponse.json(
        { error: "Contact form verification failed." },
        { status: 400 },
      );
    }

    const recipients = parseRecipients(process.env.CONTACT_EMAIL);
    if (recipients.length === 0) {
      return NextResponse.json(
        { error: "Contact email is not configured." },
        { status: 500 },
      );
    }

    const invalidRecipients = recipients.filter(
      (recipient) => !isValidEmail(recipient),
    );
    if (invalidRecipients.length > 0) {
      return NextResponse.json(
        { error: "Contact email is not configured correctly." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from: contactFormSender,
      to: recipients,
      replyTo: email,
      subject: subject ? `New enquiry: ${subject}` : `New message from ${name}`,
      react: ContactEmail({
        userFirstname: name,
        email,
        phone,
        subject,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
