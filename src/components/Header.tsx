import Link from "next/link";
import Image from "next/image";

export default function Header () {
    return (
        <header className="w-full bg-white fixed z-60 border-gray-200">
            <div className="max-w-6xl px-6 py-4 flex justify-between mx-auto items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/hobsonlodgelogo.png"
                        alt="logo"
                        width={300}
                        height={20}
                    />
                </Link>
                <nav className="flex items-center gap-8 text-sm">
                    <Link href="/rooms" className="text-black">
                        rooms
                    </Link>
                    <Link href="/location" className="text-black">
                        location
                    </Link>
                    <Link href="/rules" className="text-black">
                        rules
                    </Link>
                    <Link href="/contact" className="text-black">
                        contact
                    </Link>
                    <Link href="https://hotels.cloudbeds.com/en/reservation/CAZrqh" className="text-white bg-black px-3 py-1 rounded-md">
                        book
                    </Link>
                </nav>
            </div>
        </header>
    );
}