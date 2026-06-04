"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BookButton from "./BookButton";

const navItems = [
  { href: "/", label: "Hobson Lodge", mobileLabel: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/location", label: "Location" },
  { href: "/rules", label: "Hostel Rules" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      setIsAtTop(window.scrollY <= 0);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const headerClassName = isAtTop
    ? "border-transparent bg-[#2b1d17]"
    : "border-[#d9b13b]/30 bg-white shadow-sm";

  const bookClassName = isAtTop
    ? "border-white bg-white text-[#2b1d17]"
    : "border-[#2b1d17] bg-[#2b1d17] text-white";

  const menuButtonClassName = isAtTop
    ? "border-white/50 text-white"
    : "border-[#18130c]/30 text-[#18130c]";

  const getDesktopLinkClassName = (href: string) => {
    const isCurrent = pathname === href;
    const baseClassName = "transition-colors duration-500 hover:text-[#969696]";

    if (isCurrent) {
      return `${baseClassName} text-[#969696]`;
    }

    return `${baseClassName} ${isAtTop ? "text-white" : "text-[#18130c]"}`;
  };

  const getMobileLinkClassName = (href: string) => {
    const isCurrent = pathname === href;

    return `rounded-xl border px-4 py-3 shadow-md transition-colors ${
      isCurrent
        ? "border-[#d9b13b] bg-[#d9b13b] text-[#18130c]"
        : isAtTop
          ? "border-white/20 bg-white/10 text-white hover:border-[#d9b13b] hover:text-[#d9b13b]"
          : "border-[#18130c]/15 bg-[#f8f3e8] text-[#18130c] hover:border-[#d9b13b] hover:text-[#8c6a0c]"
    }`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-500 ease-in-out ${headerClassName}`}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 lg:px-8">
        <Link href="/" className="relative h-9 w-36 shrink-0 min-[380px]:w-40 lg:h-11 lg:w-56" aria-label="Hobson Lodge home">
          <Image
            src="/images/hobsonlodgelogogray.png"
            alt="Hobson Lodge"
            fill
            priority
            sizes="(min-width: 640px) 224px, 160px"
            className={`object-contain transition-opacity duration-500 ${
              isAtTop ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/images/hobsonlodgelogo.png"
            alt=""
            fill
            sizes="(min-width: 640px) 224px, 160px"
            className={`object-contain transition-opacity duration-500 ${
              isAtTop ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <nav className="hidden items-center justify-end gap-5 text-xs font-semibold uppercase lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={getDesktopLinkClassName(item.href)}
            >
              {item.label}
            </Link>
          ))}
          <BookButton
            className={`rounded-lg border px-4 py-2 shadow-md transition-colors duration-500 hover:border-[#969696] hover:bg-[#969696] hover:text-white ${bookClassName}`}
          >
            Book
          </BookButton>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <BookButton
            className={`min-h-10 rounded-lg border px-3 text-sm font-bold shadow-md transition-colors duration-500 hover:border-[#969696] hover:bg-[#969696] hover:text-white min-[380px]:px-4 ${bookClassName}`}
            onClose={() => setIsMenuOpen(false)}
          >
            Book
          </BookButton>
          <button
            type="button"
            className={`flex h-10 w-10 items-center justify-center rounded-lg border shadow-md transition-colors duration-500 ${menuButtonClassName}`}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 top-full border-b px-5 pb-5 pt-2 shadow-xl lg:hidden ${
            isAtTop
              ? "border-white/10 bg-[#2b1d17] text-white"
              : "border-[#d9b13b]/30 bg-white text-[#18130c]"
          }`}
        >
          <nav className="mx-auto grid max-w-7xl gap-2 text-sm font-black uppercase">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={getMobileLinkClassName(item.href)}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.mobileLabel ?? item.label}
              </Link>
            ))}
            <BookButton
              className="mt-2 rounded-xl border border-[#d9b13b] bg-[#d9b13b] px-4 py-3 text-sm font-black uppercase text-[#18130c] shadow-md hover:bg-white"
              onClose={() => setIsMenuOpen(false)}
            >
              Book now
            </BookButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
