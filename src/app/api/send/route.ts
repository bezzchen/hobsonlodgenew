import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/contact/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_EMAIL;
    if (!to) {
      return NextResponse.json(
        { error: "Contact email is not configured." },
        { status: 500 },
      );
    }

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM ?? "Contact Form <onboarding@resend.dev>",
      to: [to],
      subject: `New message from ${name}`,
      react: ContactEmail({
        userFirstname: name,
        email,
        phone,
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
