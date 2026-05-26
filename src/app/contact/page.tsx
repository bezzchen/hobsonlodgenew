import Image from "next/image";
import ContactForm from "../../components/ContactForm";

const contactDetails = [
  {
    label: "Address",
    value: "224 Hobson Street, Auckland CBD, Auckland 1010, New Zealand",
  },
  {
    label: "Phone",
    value: "09 972 9019",
    href: "tel:+6499729019",
  },
  {
    label: "Email",
    value: "info@hobsonlodge.co.nz",
    href: "mailto:info@hobsonlodge.co.nz",
  },
  {
    label: "Reception",
    value: "Monday to Sunday, 9:30am - 5pm. Check-in is 2pm - 5pm.",
  },
  {
    label: "After-hours",
    value: "Please contact Hobson Lodge directly for after-hours arrival information.",
  },
];

export default function Contact() {
  return (
    <main className="bg-[#f8f3e8] pt-28 text-[#18130c] sm:pt-24">
      <section className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[420px] lg:min-h-[calc(100vh-6rem)]">
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

        <div className="flex flex-col justify-center px-5 py-16 lg:px-16">
          <p className="text-sm font-black uppercase text-[#2f85a7]">Contact</p>
          <h1 className="mt-4 text-6xl font-black uppercase leading-none md:text-7xl">
            Contact us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3a3024]">
            Send an enquiry about room availability, arrival time, parking, longer stays or any questions before booking.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="border-t border-[#d9b13b] pt-4">
                <p className="text-sm font-black uppercase text-[#4f6f57]">{detail.label}</p>
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

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#4f6f57]">Send a message</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none">
              Enquire now.
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
