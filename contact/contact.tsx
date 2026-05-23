interface ContactEmailProps {
  userFirstname: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactEmail({
  userFirstname,
  email,
  phone,
  message,
}: ContactEmailProps) {
  return (
    <div>
      <h1>New contact form message</h1>
      <p>
        <strong>Name:</strong> {userFirstname}
      </p>
      {email ? (
        <p>
          <strong>Email:</strong> {email}
        </p>
      ) : null}
      {phone ? (
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      ) : null}
      {message ? (
        <p>
          <strong>Message:</strong> {message}
        </p>
      ) : null}
    </div>
  );
}
