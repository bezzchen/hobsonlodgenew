"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BookButton from "./BookButton";

const navItems = [
  { href: "/", label: "Hobson Lodge", mobileHidden: true },
  { href: "/rooms", label: "Rooms" },
  { href: "/location", label: "Location" },
  { href: "/rules", label: "Hostel Rules", mobileHidden: true },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

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

  const headerClassName = isAtTop
    ? "border-transparent bg-[#2b1d17]"
    : "border-[#d9b13b]/30 bg-white shadow-sm";

  const bookClassName = isAtTop
    ? "border-white bg-white text-[#2b1d17]"
    : "border-[#2b1d17] bg-[#2b1d17] text-white";

  const getLinkClassName = (href: string, mobileHidden?: boolean) => {
    const isCurrent = pathname === href;
    const baseClassName = `transition-colors duration-500 hover:text-[#969696] ${
      mobileHidden ? "hidden sm:inline-flex" : ""
    }`;

    if (isCurrent) {
      return `${baseClassName} text-[#969696]`;
    }

    return `${baseClassName} ${isAtTop ? "text-white" : "text-[#18130c]"}`;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-500 ease-in-out ${headerClassName}`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-3 sm:flex-row sm:justify-between sm:gap-6 lg:px-8">
        <Link href="/" className="relative h-8 w-40 sm:h-11 sm:w-56" aria-label="Hobson Lodge home">
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
            priority
            sizes="(min-width: 640px) 224px, 160px"
            className={`object-contain transition-opacity duration-500 ${
              isAtTop ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        <nav className="flex w-full items-center justify-center gap-3 text-xs font-semibold uppercase sm:w-auto sm:justify-end sm:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={getLinkClassName(item.href, item.mobileHidden)}
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
      </div>
    </header>
  );
}
