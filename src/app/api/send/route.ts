import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/contact/contact";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactFormSender = "Hobson Lodge <info@hobsonlodge.co.nz>";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const subject = typeof body.subject === "string" ? body.subject.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

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
