import Image from "next/image";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <main className="bg-white text-black">
      <Image
        src="/images/0.jpg"
        alt="Hobson Lodge"
        width={1600}
        height={800}
        className="w-full object-cover h-[690px] pt-16"
      />

      <div className="flex flex-col gap-y-8 text-center px-6 pb-16">
        <h1 className="text-6xl pt-10">CONTACT US</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Have a question about your stay? Send us a message and we will reply
          as soon as we can. You can also reach us directly using the details
          below.
        </p>

        <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6 text-left">
          <section className="flex flex-col gap-4 text-lg">
            <h2 className="text-2xl font-semibold text-center lg:text-left">
              Get in touch
            </h2>
            <p>
              <span className="font-semibold">Address</span>
              <br />
              224 Hobson Street, Auckland CBD, Auckland 1010, New Zealand
            </p>
            <p>
              <span className="font-semibold">Phone</span>
              <br />
              <a href="tel:+6499729019" className="underline hover:no-underline">
                09 972 9019
              </a>
            </p>
            <p>
              <span className="font-semibold">Email</span>
              <br />
              <a
                href="mailto:info@hobsonlodge.co.nz"
                className="underline hover:no-underline"
              >
                info@hobsonlodge.co.nz
              </a>
            </p>
            <p>
              <span className="font-semibold">Reception hours</span>
              <br />
              Monday – Sunday, 9:30am – 5pm
              <br />
              Check-in: 2pm – 5pm
            </p>
          </section>

          <section className="max-w-xl w-full mx-auto lg:mx-0">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">
              Send a message
            </h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
