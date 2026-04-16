import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import contact from '@/contact/contact';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the form data sent from the frontend
    const { name, email, phone, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain here later
      to: ['your-email@example.com'], // Where you want to receive the messages
      subject: `New Message from ${name}`,
      react: contact({ 
        userFirstname: name,
        // You can update your template to accept phone and message too
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
