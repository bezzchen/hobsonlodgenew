import Link from "next/link";
import Image from "next/image";

export default function Header () {
    return (
        <header className="w-full bg-white fixed z-60">
            <div className="mx-w-7xl mx-auto px-4 py-6">
                <Link href="/">
                    <Image
                        src="/images/hobsonlodgelogo.png"
                        alt="logo"
                        width={300}
                        height={40}
                    />
                </Link>
            </div>
        </header>
    );
}