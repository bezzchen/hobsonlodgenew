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
                        height={40}
                    />
                </Link>
                <nav className="flex item-center gap-8 text-sm">
                    <Link href="/rooms" className="text-black">
                        rooms
                    </Link>
                    <Link href="/rooms" className="text-black">
                        location
                    </Link>
                    <Link href="/rooms" className="text-black">
                        rules
                    </Link>
                    <Link href="/rooms" className="text-black">
                        contact
                    </Link>
                    <Link href="/rooms" className="text-black">
                        book
                    </Link>
                </nav>
            </div>
        </header>
    );
}