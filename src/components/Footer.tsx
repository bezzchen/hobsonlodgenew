import Link from "next/link";
import BookButton from "./BookButton";
import { contactDetails } from "../lib/seo";

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
                        <a href={`tel:${contactDetails.phoneInternational}`} className="hover:text-[#d9b13b]">{contactDetails.phoneDisplay}</a><br />
                        <a href={contactDetails.whatsappUrl} className="hover:text-[#d9b13b]" rel="noreferrer" target="_blank">WhatsApp {contactDetails.whatsappDisplay}</a><br />
                        <a href={`mailto:${contactDetails.email}`} className="hover:text-[#d9b13b]">{contactDetails.email}</a>
                    </p>
                    <p>
                        Reception: Monday to Sunday, 9:30am - 5pm<br />
                        Check-in: 2pm - 5pm<br />
                        After-hours: contact the hotel directly
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-xs font-semibold uppercase text-[#f8f3e8]/75 sm:flex-row sm:items-center sm:justify-between">
                <p>Hobson Lodge respects guest privacy.</p>
                <Link href="/privacy" className="text-[#d9b13b] hover:text-white">
                    Privacy policy
                </Link>
            </div>
        </footer>
    )
}
