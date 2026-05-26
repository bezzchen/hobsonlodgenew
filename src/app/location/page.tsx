import Image from "next/image";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const locationNotes = [
  {
    title: "The University of Auckland",
    copy: "17 minute walk",
  },
  {
    title: "Britomart Transport Centre",
    copy: "18 minute walk",
  },
  {
    title: "Auckland Museum and Domain",
    copy: "30 minute walk",
  },
  {
    title: "Countdown Supermarket",
    copy: "15 minute walk",
  },
  {
    title: "Sky Tower",
    copy: "8 minute walk",
  },
  {
    title: "InterCity Bus Terminal",
    copy: "6 minute walk",
  },
  {
    title: "Albert Park",
    copy: "15 minute walk",
  },
  {
    title: "Queen Street",
    copy: "7 minute walk",
  },
];

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export default function Location() {
  return (
    <main className="bg-[#f8f3e8] pt-28 text-[#18130c] sm:pt-24">
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#2f85a7]">Location</p>
            <h1 className="mt-4 text-6xl font-black uppercase leading-none md:text-7xl">
              CBD location.
            </h1>
          </div>
          <p className="text-lg leading-8 text-[#3a3024]">
            Hobson Lodge is close and convenient, putting central Auckland attractions, transport, supermarket stops and city parks within walking distance.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 lg:px-8">
        <div className="mx-auto overflow-hidden border border-[#18130c]/15 bg-white">
          <GoogleMapsEmbed
            apiKey={googleMapsApiKey}
            height={520}
            width="100%"
            mode="place"
            q="224+Hobson+Street+Auckland+CBD,+Auckland+1010,+New+Zealand"
          />
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto mb-10 max-w-7xl">
          <p className="text-sm font-black uppercase text-[#4f6f57]">Close and convenient</p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-none">
            Walking times from Hobson Lodge.
          </h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locationNotes.map((note) => (
            <article key={note.title} className="border border-[#d9b13b]/50 bg-white p-7">
              <h3 className="text-2xl font-black uppercase">{note.title}</h3>
              <p className="mt-4 text-lg font-semibold text-[#3a3024]">{note.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-[#18130c] text-[#f8f3e8] lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <Image
            src="/images/skytower.jpg"
            alt="Sky Tower near Hobson Lodge"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 lg:px-16">
          <p className="text-sm font-black uppercase text-[#d9b13b]">Arrival</p>
          <h2 className="mt-4 text-5xl font-black uppercase leading-none">
            Need after-hours check-in?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8">
            Reception is open daily from 9:30am to 5pm, and check-in runs from 2pm to 5pm. Please contact Hobson Lodge directly for after-hours arrival details.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit border border-[#d9b13b] bg-[#d9b13b] px-6 py-3 text-sm font-bold uppercase text-[#18130c] hover:bg-transparent hover:text-[#d9b13b]"
          >
            Contact reception
          </Link>
        </div>
      </section>
    </main>
  );
}
