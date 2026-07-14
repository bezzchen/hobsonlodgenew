import ContactForm from "../../components/ContactForm";
import PageHero from "../../components/PageHero";
import SiteIcon, { type SiteIconName } from "../../components/SiteIcon";
import { contactDetails as siteContactDetails, createSeoMetadata } from "../../lib/seo";

export const metadata = createSeoMetadata({
  title: "Contact Hobson Lodge Auckland",
  description:
    "Contact Hobson Lodge in Auckland CBD for room enquiries, direct booking questions, parking pre-booking, after-hours arrival details and accommodation support.",
  path: "/contact",
  imageUrl: "/images/2.jpg",
  imageAlt: "Hobson Lodge guest corridor in Auckland CBD",
});

const contactCards = [
  {
    label: "Address",
    value: siteContactDetails.address,
    icon: "mapPin",
  },
  {
    label: "International Phone",
    value: siteContactDetails.phoneDisplay,
    href: `tel:${siteContactDetails.phoneInternational}`,
    icon: "phone",
  },
  {
    label: "WhatsApp",
    value: siteContactDetails.whatsappDisplay,
    href: siteContactDetails.whatsappUrl,
    icon: "phone",
  },
  {
    label: "Email",
    value: siteContactDetails.email,
    href: `mailto:${siteContactDetails.email}`,
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
    <main className="bg-[#f8f3e8] text-[#18130c]">
      <PageHero
        eyebrow="Contact"
        imageAlt="Hobson Lodge guest corridor"
        imageSrc="/images/2.jpg"
        title="Contact us."
      >
        <p>
          Send an enquiry about room availability, arrival time, parking, longer stays or any questions before booking.
        </p>
      </PageHero>

      <section className="px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactCards.map((detail, index) => (
              <div
                key={detail.label}
                data-reveal
                className={`rounded-xl border border-[#d9b13b]/60 bg-white/60 p-4 shadow-md ${
                  index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : ""
                }`}
              >
                <div className={iconBoxClassName}>
                  <SiteIcon name={detail.icon} />
                </div>
                <p className="mt-4 text-sm font-black uppercase text-[#4f6f57]">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-2 block font-semibold hover:text-[#8c6a0c]"
                    rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                    target={detail.href.startsWith("http") ? "_blank" : undefined}
                  >
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
