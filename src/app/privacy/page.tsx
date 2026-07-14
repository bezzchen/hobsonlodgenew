import PageHero from "../../components/PageHero";
import { contactDetails, createSeoMetadata } from "../../lib/seo";

export const metadata = createSeoMetadata({
  title: "Privacy Policy",
  description:
    "How Hobson Lodge collects, uses, stores and protects personal information for enquiries, bookings and website use.",
  path: "/privacy",
  imageUrl: "/images/6.jpg",
  imageAlt: "Hobson Lodge shared lounge space",
});

const policySections = [
  {
    title: "Information we collect",
    copy: [
      "We collect personal information you choose to provide when you contact us, make an enquiry, call us, email us, or book accommodation. This may include your name, email address, phone number, enquiry details, arrival information, room preferences and booking-related details.",
      "We may also collect basic website information such as device, browser, pages viewed and general usage data through analytics tools.",
    ],
  },
  {
    title: "Why we collect it",
    copy: [
      "We collect personal information to respond to enquiries, manage accommodation requests, support check-in and after-hours arrival, process booking-related communication, improve the website and meet legal or operational requirements.",
      "We only ask for information that is reasonably needed for these purposes.",
    ],
  },
  {
    title: "Bookings and third-party services",
    copy: [
      "If you choose to book online, you may be taken to our booking provider's website. Information submitted through that booking flow is handled by the booking provider and may also be shared with Hobson Lodge so we can manage your stay.",
      "Our website may use service providers for contact form email delivery, Google Analytics, Google Maps and website hosting. These providers may process information for us, including outside New Zealand, subject to their own security and privacy practices.",
    ],
  },
  {
    title: "How we use and share information",
    copy: [
      "We use personal information for the purpose it was provided, or for directly related purposes. We do not sell personal information.",
      "We may share information with staff, booking and technology providers, payment or accommodation service providers, professional advisers, or authorities where required by law or necessary to protect guests, staff, property or business operations.",
    ],
  },
  {
    title: "Security and retention",
    copy: [
      "We take reasonable steps to protect personal information from loss, unauthorised access, misuse, disclosure or alteration.",
      "We keep personal information only for as long as needed for the purpose it was collected, to manage accommodation records, resolve enquiries, meet accounting or legal obligations, or support legitimate business needs.",
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
    title: "Cookies and analytics",
    copy: [
      "Our website may use cookies or similar technologies to help the website function, understand site usage and improve visitor experience.",
      "You can usually change cookie settings in your browser. Disabling some cookies may affect how parts of the website work.",
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
          Last updated: 4 June 2026
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
