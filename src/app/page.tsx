import Image from "next/image";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const features = [
  "Newly refurbished bedrooms",
  "Hotel grade mattresses",
  "Fresh air ventilation in all rooms",
  "Free WiFi access in all areas",
  "Spacious living room and kitchen",
  "Onsite parking by pre-booking",
];

const rooms = [
  {
    title: "Mixed Dorm Beds",
    image: "/images/bedin8_1.jpg",
    copy: "Choose 8-bed or 6-bed mixed dormitory rooms with shared bathroom access, ventilation, free WiFi, lockers and storage cabinets.",
  },
  {
    title: "Female Dorm Beds",
    image: "/images/bedin6f_1.jpg",
    copy: "A 6-bed female dormitory option with shared bathroom access, ventilation, free WiFi, ceiling fans and individual storage.",
  },
  {
    title: "Double Rooms",
    image: "/images/dbe_1.jpg",
    copy: "Private double room options are available with either a shared bathroom or ensuite, plus free WiFi and useful in-room amenities.",
  },
];

const stats = [
  ["8 min", "walk to Sky Tower"],
  ["6 min", "walk to InterCity Bus Terminal"],
  ["$15", "NZD per day onsite parking"],
  ["9:30am", "daily reception opens"],
];

const usefulLinks = [
  ["Eventfinda New Zealand", "https://www.eventfinda.co.nz/"],
  ["Auckland Public Transport", "https://at.govt.nz/"],
  ["Auckland Museum", "https://www.aucklandmuseum.com/"],
  ["Auckland Art Gallery", "https://www.aucklandartgallery.com/"],
  ["Conservation Campsites", "https://www.doc.govt.nz/"],
  ["Auckland Tourism and Events", "https://www.aucklandnz.com/"],
];

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export default function Home() {
  return (
    <main className="bg-[#f8f3e8] text-[#18130c]">
      <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-24">
        <Image
          src="/images/0.jpg"
          alt="Hobson Lodge exterior on Hobson Street"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#18130c]/55" />

        <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-end px-5 pb-10 text-white lg:px-8">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex rounded-lg bg-[#d9b13b] px-4 py-2 text-xs font-black uppercase text-[#18130c] shadow-lg">
              Auckland CBD hostel
            </p>
            <h1 className="text-6xl font-black uppercase leading-none sm:text-7xl lg:text-8xl">
              Hobson Lodge
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#f8f3e8]">
              Newly refurbished Auckland CBD accommodation with decorated bedrooms, hotel grade mattresses, a spacious living room and a modern shared kitchen.
            </p>
          </div>

          <div className="mt-10 grid gap-3 rounded-xl border border-white/40 bg-white/10 p-5 text-sm font-semibold uppercase text-[#f8f3e8] shadow-lg sm:grid-cols-3">
            <p>8 minutes to Sky Tower</p>
            <p>6 minutes to InterCity Bus Terminal</p>
            <p>Good for nights, weeks, work and study</p>
          </div>
        </div>
      </section>

      <section className="bg-[#18130c] px-5 py-5 text-[#f8f3e8] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-bold uppercase text-[#d9b13b]">
            Comfortable rooms, free WiFi, modern kitchen and central CBD access.
          </p>
          <Link
            href="https://hotels.cloudbeds.com/en/reservation/CAZrqh"
            className="rounded-lg border border-[#d9b13b] px-5 py-3 text-sm font-bold uppercase text-[#d9b13b] shadow-lg hover:bg-[#d9b13b] hover:text-[#18130c]"
          >
            Book now
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#2f85a7]">In the heart of the city</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-6xl">
              In the heart of Auckland CBD.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#3a3024]">
            <p>
              Hobson Lodge is newly refurbished with decorated bedrooms, hotel grade mattresses, spacious shared living areas and a modern kitchen.
            </p>
            <p>
              Stay for a night or a few weeks while you are in Auckland for business, concerts, work or study. Reception is available daily if you have questions before you arrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="rounded-xl border border-[#d9b13b]/40 bg-[#f8f3e8] p-6 shadow-lg">
              <p className="text-lg font-bold">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#4f6f57]">Rooms and spaces</p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-6xl">
                Pick your pace.
              </h2>
            </div>
            <Link href="/rooms" className="text-sm font-bold uppercase underline underline-offset-4 hover:text-[#8c6a0c]">
              View rooms
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rooms.map((room) => (
              <article key={room.title} className="overflow-hidden rounded-xl border border-[#18130c]/15 bg-white shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase">{room.title}</h3>
                  <p className="mt-3 leading-7 text-[#3a3024]">{room.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4f6f57] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-xl border border-white/30 bg-white/10 p-5 shadow-lg">
              <p className="text-5xl font-black uppercase leading-none">{value}</p>
              <p className="mt-2 text-sm font-bold uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#4f6f57]">Useful links</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none">
              Plan more of Auckland.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {usefulLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-xl border border-[#18130c]/15 bg-[#f8f3e8] p-5 font-bold shadow-md hover:border-[#d9b13b] hover:text-[#8c6a0c]"
                rel="noreferrer"
                target="_blank"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#2f85a7]">Location</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-6xl">
              Close to the city, easy to get around.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#3a3024]">
              Find us at 224 Hobson Street in Auckland CBD, close to Queen Street, Sky Tower, InterCity Bus Terminal and public transport.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#18130c]/15 bg-white shadow-lg">
            <GoogleMapsEmbed
              apiKey={googleMapsApiKey}
              height={450}
              width="100%"
              mode="place"
              q="224+Hobson+Street+Auckland+CBD,+Auckland+1010,+New+Zealand"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
