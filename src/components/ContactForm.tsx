"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again.",
        );
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("Failed to send message. Please try again.");
      setStatus("error");
    }
  }

  const inputClassName =
    "w-full border border-[#18130c]/20 bg-[#f8f3e8] p-4 text-[#18130c] placeholder-[#6f6254] focus:outline-none focus:ring-2 focus:ring-[#d9b13b]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          className={inputClassName}
          required
          disabled={status === "loading"}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="sr-only">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone (optional)"
            className={inputClassName}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className={inputClassName}
            required
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="sr-only">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          className={inputClassName}
          required
          disabled={status === "loading"}
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows={6}
          className={`${inputClassName} resize-none`}
          required
          disabled={status === "loading"}
        />
      </div>

      {status === "success" && (
        <p className="text-green-700 text-sm" role="status">
          Thank you - your message has been sent. We will get back to you soon.
        </p>
      )}

      {status === "error" && errorMessage && (
        <p className="text-red-600 text-sm" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full border border-[#18130c] bg-[#18130c] py-4 font-bold uppercase text-white hover:bg-[#d9b13b] hover:text-[#18130c] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
