"use client";

import { useEffect, useState } from "react";

const bookingUrl = "https://hotels.cloudbeds.com/en/reservation/CAZrqh";
const phoneHref = "tel:+6499729019";
const phoneLabel = "09 972 9019";

type BookButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function BookButton({ children = "Book", className = "" }: BookButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#18130c]/60 px-5"
          role="presentation"
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            aria-modal="true"
            className="w-full max-w-sm rounded-2xl border border-[#d9b13b]/50 bg-[#f8f3e8] p-6 text-center text-[#18130c] shadow-2xl"
            role="dialog"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="ml-auto flex rounded-full border border-[#18130c]/20 px-3 py-1 text-xs font-bold uppercase shadow-sm hover:bg-white"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <p className="mt-2 text-sm font-black uppercase text-[#4f6f57]">Book your stay</p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-none">
              How would you like to book?
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#3a3024]">
              Call Hobson Lodge directly or continue to the online booking website.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                className="rounded-xl border border-[#18130c] bg-[#18130c] px-5 py-3 text-sm font-bold uppercase text-white shadow-lg hover:bg-[#d9b13b] hover:text-[#18130c]"
                href={phoneHref}
              >
                Call {phoneLabel}
              </a>
              <a
                className="rounded-xl border border-[#d9b13b] bg-[#d9b13b] px-5 py-3 text-sm font-bold uppercase text-[#18130c] shadow-lg hover:bg-white"
                href={bookingUrl}
                rel="noreferrer"
                target="_blank"
              >
                Book through website
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
