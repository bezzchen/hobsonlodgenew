import Link from "next/link";
import Image from "next/image";

export default function Header () {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-[#d9b13b]/30 bg-[#f8f3e8]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-5 py-3 sm:flex-row sm:justify-between sm:gap-6 lg:px-8">
                <Link href="/" className="flex min-w-0 items-center" aria-label="Hobson Lodge home">
                    <Image
                        src="/images/hobsonlodgelogo.png"
                        alt="Hobson Lodge"
                        width={260}
                        height={34}
                        priority
                        className="h-auto w-40 sm:w-56"
                    />
                </Link>
                <nav className="flex w-full items-center justify-center gap-3 text-xs font-semibold uppercase text-[#18130c] sm:w-auto sm:justify-end sm:gap-5">
                    <Link href="/rooms" className="hover:text-[#8c6a0c]">
                        Rooms
                    </Link>
                    <Link href="/location" className="hover:text-[#8c6a0c]">
                        Location
                    </Link>
                    <Link href="/rules" className="hidden hover:text-[#8c6a0c] sm:inline">
                        Hostel Rules
                    </Link>
                    <Link href="/contact" className="hover:text-[#8c6a0c]">
                        Contact
                    </Link>
                    <Link href="https://hotels.cloudbeds.com/en/reservation/CAZrqh" className="border border-[#18130c] bg-[#18130c] px-4 py-2 text-white hover:bg-[#d9b13b] hover:text-[#18130c]">
                        Book
                    </Link>
                </nav>
            </div>
        </header>
    );
}
