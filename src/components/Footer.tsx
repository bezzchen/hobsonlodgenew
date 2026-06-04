import Link from "next/link";
import BookButton from "./BookButton";

export default function Footer() {
    return (
        <footer className="bg-[#18130c] px-5 py-10 text-[#f8f3e8] sm:py-12">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
                <div>
                    <p className="text-sm font-semibold uppercase text-[#d9b13b]">Hobson Lodge</p>
                    <h2 className="mt-3 max-w-md text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
                        Your central Auckland base.
                    </h2>
                    <BookButton
                        className="mt-6 inline-flex rounded-lg border border-[#d9b13b] bg-[#d9b13b] px-5 py-3 text-sm font-bold uppercase text-[#18130c] shadow-lg hover:bg-transparent hover:text-[#d9b13b]"
                    >
                        Book direct
                    </BookButton>
                </div>

                <div className="space-y-4 text-sm leading-6">
                    <h3 className="font-bold uppercase text-[#d9b13b]">Find us</h3>
                    <p>
                        224 Hobson Street<br />
                        Auckland CBD, Auckland 1010<br />
                        New Zealand
                    </p>
                    <p>Close to Sky Tower, Queen Street, InterCity Bus Terminal and Britomart Transport Centre.</p>
                </div>

                <div className="space-y-4 text-sm leading-6">
                    <h3 className="font-bold uppercase text-[#d9b13b]">Contact</h3>
                    <p>
                        <a href="tel:+6499729019" className="hover:text-[#d9b13b]">09 972 9019</a><br />
                        <a href="mailto:info@hobsonlodge.co.nz" className="hover:text-[#d9b13b]">info@hobsonlodge.co.nz</a>
                    </p>
                    <p>
                        Reception: Monday to Sunday, 9:30am - 5pm<br />
                        Check-in: 2pm - 5pm<br />
                        After-hours: contact the hotel directly
                    </p>
                    <Link href="/privacy" className="inline-flex font-bold uppercase text-[#d9b13b] hover:text-white">
                        Privacy policy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
