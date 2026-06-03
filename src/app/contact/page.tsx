import Image from "next/image";
import ContactForm from "../../components/ContactForm";
import SiteIcon, { type SiteIconName } from "../../components/SiteIcon";

const contactDetails = [
  {
    label: "Address",
    value: "224 Hobson Street, Auckland CBD, Auckland 1010, New Zealand",
    icon: "mapPin",
  },
  {
    label: "Phone",
    value: "09 972 9019",
    href: "tel:+6499729019",
    icon: "phone",
  },
  {
    label: "Email",
    value: "info@hobsonlodge.co.nz",
    href: "mailto:info@hobsonlodge.co.nz",
    icon: "mail",
  },
  {
    label: "Reception",
    value: "Monday to Sunday, 9:30am - 5pm. Check-in is 2pm - 5pm.",
    icon: "clock",
  },
  {
    label: "After-hours",
    value: "Please contact Hobson Lodge directly for after-hours arrival information.",
    icon: "key",
  },
] satisfies {
  href?: string;
  icon: SiteIconName;
  label: string;
  value: string;
}[];

const iconBoxClassName =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d9b13b] text-[#18130c] shadow-md";

export default function Contact() {
  return (
    <main className="bg-[#f8f3e8] pt-20 text-[#18130c] sm:pt-24">
      <section className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="relative min-h-[260px] sm:min-h-[420px] lg:min-h-[calc(100vh-6rem)]">
          <Image
            src="/images/2.jpg"
            alt="Hobson Lodge guest corridor"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#18130c]/20" />
        </div>

        <div className="flex flex-col justify-center px-5 py-12 sm:py-16 lg:px-16">
          <p data-reveal className="text-sm font-black uppercase text-[#2f85a7]">Contact</p>
          <h1 data-reveal className="reveal-delay-1 mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
            Contact us.
          </h1>
          <p data-reveal className="reveal-delay-2 mt-5 max-w-2xl text-base leading-7 text-[#3a3024] sm:mt-6 sm:text-lg sm:leading-8">
            Send an enquiry about room availability, arrival time, parking, longer stays or any questions before booking.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactDetails.map((detail, index) => (
              <div
                key={detail.label}
                data-reveal
                className={`rounded-xl border border-[#d9b13b]/60 bg-white/60 p-4 shadow-md ${
                  index % 2 === 1 ? "reveal-delay-1" : ""
                }`}
              >
                <div className={iconBoxClassName}>
                  <SiteIcon name={detail.icon} />
                </div>
                <p className="mt-4 text-sm font-black uppercase text-[#4f6f57]">{detail.label}</p>
                {detail.href ? (
                  <a href={detail.href} className="mt-2 block font-semibold hover:text-[#8c6a0c]">
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-2 font-semibold leading-6">{detail.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="text-sm font-black uppercase text-[#4f6f57]">Send a message</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
              Enquire now.
            </h2>
          </div>
          <div data-reveal className="reveal-delay-1">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
