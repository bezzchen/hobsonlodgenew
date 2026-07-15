import PageHero from "../../components/PageHero";
import { contactDetails, createSeoMetadata } from "../../lib/seo";

export const metadata = createSeoMetadata({
  title: "Privacy Policy",
  description:
    "How Hobson Lodge collects, uses, shares, stores and protects personal information for website enquiries, bookings and accommodation support.",
  path: "/privacy",
  imageUrl: "/images/6.jpg",
  imageAlt: "Hobson Lodge shared lounge space",
});

const policySections = [
  {
    title: "Who this policy covers",
    copy: [
      "This privacy policy applies to personal information collected through this Hobson Lodge website, through the contact form, by phone, by email, through WhatsApp, and when you use links from this website to arrange accommodation.",
      "Hobson Lodge is based at 224 Hobson Street, Auckland CBD, Auckland 1010, New Zealand.",
    ],
  },
  {
    title: "Information we collect",
    copy: [
      "We collect information you choose to provide, such as your name, email address, phone number, enquiry details, arrival information, room preferences, parking requests, booking-related questions, and messages sent to us.",
      "We may also collect limited technical information when you use the website, such as pages viewed, approximate location, browser, device, IP address, referral source, and general usage data from analytics, security and hosting tools.",
    ],
  },
  {
    title: "Why we use it",
    copy: [
      "We use personal information to respond to enquiries, help with room availability, support booking and arrival questions, manage accommodation-related communication, arrange parking where available, support after-hours arrival, improve the website, protect the contact form from abuse, and meet legal or operational requirements.",
      "We only ask for information that is reasonably needed for these purposes. We do not sell personal information.",
    ],
  },
  {
    title: "Bookings and payments",
    copy: [
      "If you choose to book online, you may be taken to our booking provider's website. Information submitted through that booking flow is handled by the booking provider and may also be shared with Hobson Lodge so we can manage your stay.",
      "Payment card information, booking confirmations, cancellation details and booking account records may be handled by the booking or payment provider rather than by this website. Their own privacy terms may also apply.",
    ],
  },
  {
    title: "Website services",
    copy: [
      "This website may use service providers for contact form email delivery, reCAPTCHA Enterprise spam protection, Google Maps, Google Analytics, website hosting, website security, and booking links.",
      "These providers may process technical or contact information for us, including outside New Zealand, subject to their own security and privacy practices.",
    ],
  },
  {
    title: "Cookies and similar tools",
    copy: [
      "Our website may use cookies or similar technologies to help the website work, understand site usage, improve visitor experience, support maps and analytics, and protect the contact form from automated submissions.",
      "You can usually change cookie settings in your browser. Disabling some cookies may affect maps, booking links, contact form verification, analytics or other parts of the website.",
    ],
  },
  {
    title: "Sharing information",
    copy: [
      "We may share personal information with Hobson Lodge staff, booking and payment providers, email and technology providers, website hosting providers, professional advisers, maintenance or accommodation service providers, and authorities where required by law.",
      "We may also share information where reasonably necessary to protect guests, staff, property, systems, or business operations.",
    ],
  },
  {
    title: "Storage, security and retention",
    copy: [
      "We take reasonable steps to protect personal information from loss, unauthorised access, misuse, disclosure, alteration or destruction.",
      "We keep personal information only for as long as needed for the purpose it was collected, to manage accommodation records, resolve enquiries, meet accounting or legal obligations, handle disputes, improve operations, or support legitimate business needs.",
      "If a privacy breach is likely to cause serious harm, we will take steps required under New Zealand privacy law, including notifying affected people and the Office of the Privacy Commissioner where required.",
    ],
  },
  {
    title: "Access and correction",
    copy: [
      "You can ask us whether we hold personal information about you, request access to it, or ask us to correct it if it is wrong, incomplete or out of date.",
      "To make a privacy request, contact us using the details below. We may need to verify your identity before responding.",
    ],
  },
  {
    title: "Policy updates",
    copy: [
      "We may update this privacy policy from time to time. The latest version will be published on this page with the updated date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f8f3e8] text-[#18130c]">
      <PageHero
        eyebrow="Privacy"
        imageAlt="Hobson Lodge shared lounge space"
        imageSrc="/images/6.jpg"
        title="Privacy policy."
      >
        <p>
          This policy explains how Hobson Lodge collects, uses, stores and protects personal information when you use this website, contact us or arrange accommodation.
        </p>
        <p className="mt-4 text-sm font-black uppercase text-[#d9b13b]">
          Last updated: 15 July 2026
        </p>
      </PageHero>

      <section className="px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {policySections.map((section, index) => (
            <article
              key={section.title}
              data-reveal
              className={`rounded-xl border border-[#18130c]/15 bg-white p-6 shadow-lg ${
                index % 2 === 1 ? "reveal-delay-1" : ""
              }`}
            >
              <p className="text-sm font-black uppercase text-[#d9b13b]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-xl font-black uppercase sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-6 text-[#3a3024] sm:text-base sm:leading-7">
                {section.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#18130c] px-5 py-12 text-[#f8f3e8] sm:py-16 lg:px-8">
        <div data-reveal className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase text-[#d9b13b]">Privacy contact</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
              Questions or requests.
            </h2>
          </div>
          <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-sm leading-7 shadow-lg sm:text-base">
            <p>
              Hobson Lodge, {contactDetails.address}
            </p>
            <p className="mt-4">
              Phone: <a href={`tel:${contactDetails.phoneInternational}`} className="font-bold text-[#d9b13b] hover:text-white">{contactDetails.phoneDisplay}</a>
            </p>
            <p>
              WhatsApp: <a href={contactDetails.whatsappUrl} className="font-bold text-[#d9b13b] hover:text-white" rel="noreferrer" target="_blank">{contactDetails.whatsappDisplay}</a>
            </p>
            <p>
              Email: <a href={`mailto:${contactDetails.email}`} className="font-bold text-[#d9b13b] hover:text-white">{contactDetails.email}</a>
            </p>
            <p className="mt-4">
              You can also contact the{" "}
              <a
                href="https://www.privacy.org.nz/"
                className="font-bold text-[#d9b13b] hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                Office of the Privacy Commissioner
              </a>
              {" "}for information about privacy rights in New Zealand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
