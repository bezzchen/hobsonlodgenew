import Image from "next/image";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import BookButton from "../components/BookButton";
import SiteIcon, { type SiteIconName } from "../components/SiteIcon";
import { createSeoMetadata } from "../lib/seo";

export const metadata = createSeoMetadata({
  title: "Hobson Lodge | Auckland CBD Hostel Accommodation",
  titleAbsolute: true,
  description:
    "Stay at Hobson Lodge, a newly refurbished Auckland CBD hostel near Sky Tower, Queen Street and InterCity Bus Terminal with dorm beds, double rooms and free WiFi.",
  path: "/",
  imageUrl: "/images/0.jpg",
  imageAlt: "Hobson Lodge exterior on Hobson Street in Auckland CBD",
});

const features = [
  { label: "Newly refurbished bedrooms", icon: "sparkle" },
  { label: "Hotel grade mattresses", icon: "mattress" },
  { label: "Fresh air ventilation in all rooms", icon: "wind" },
  { label: "Free WiFi access in all areas", icon: "wifi" },
  { label: "Spacious living room and kitchen", icon: "utensils" },
  { label: "Onsite parking by pre-booking", icon: "parking" },
] satisfies { icon: SiteIconName; label: string }[];

const heroFacts = [
  { label: "8 minutes to Sky Tower", icon: "tower" },
  { label: "6 minutes to InterCity Bus Terminal", icon: "bus" },
  { label: "Good for nights, weeks, work and study", icon: "calendar" },
] satisfies { icon: SiteIconName; label: string }[];

const stats = [
  { value: "8 min", label: "walk to Sky Tower", icon: "tower" },
  { value: "6 min", label: "walk to InterCity Bus Terminal", icon: "bus" },
  { value: "$15", label: "NZD per day onsite parking", icon: "parking" },
  { value: "9:30am", label: "daily reception opens", icon: "clock" },
] satisfies { icon: SiteIconName; label: string; value: string }[];

const usefulLinks = [
  { label: "Eventfinda New Zealand", href: "https://www.eventfinda.co.nz/", icon: "calendar" },
  { label: "Auckland Public Transport", href: "https://at.govt.nz/", icon: "at" },
  { label: "Auckland Museum", href: "https://www.aucklandmuseum.com/", icon: "museum" },
  { label: "Auckland Art Gallery", href: "https://www.aucklandartgallery.com/", icon: "art" },
  { label: "Conservation Campsites", href: "https://www.doc.govt.nz/", icon: "tent" },
  { label: "Auckland Tourism and Events", href: "https://www.aucklandnz.com/", icon: "compass" },
] satisfies { href: string; icon: SiteIconName; label: string }[];

const roomSummaries = [
  {
    title: "Mixed Dorm Beds",
    image: "/images/bedin8_1.jpg",
    copy: "Choose 8-bed or 6-bed mixed dormitory rooms with shared bathroom access, ventilation, free WiFi, lockers and storage cabinets.",
    icon: "bed",
    badge: "8",
  },
  {
    title: "Female Dorm Beds",
    image: "/images/bedin6f_1.jpg",
    copy: "A 6-bed female dormitory option with shared bathroom access, ventilation, free WiFi, ceiling fans and individual storage.",
    icon: "bed",
    badge: "6",
  },
  {
    title: "Double Rooms",
    image: "/images/dbe_1.jpg",
    copy: "Private double room options are available with either a shared bathroom or ensuite, plus free WiFi and useful in-room amenities.",
    icon: "bed",
    badge: "2",
  },
] satisfies {
  badge: string;
  copy: string;
  icon: SiteIconName;
  image: string;
  title: string;
}[];

const iconBoxClassName =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9b13b] text-[#18130c] shadow-md";

const roomCountIconClassName =
  "inline-flex w-fit items-center gap-3 rounded-xl border border-[#d9b13b]/70 bg-[#f8f3e8] px-3 py-2 text-[#18130c] shadow-md";

const darkIconBoxClassName =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-[#d9b13b] shadow-md";

const linkIconBoxClassName =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#18130c] text-[#d9b13b] shadow-md";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export default function Home() {
  return (
    <main className="bg-[#f8f3e8] text-[#18130c]">
      <section className="relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24">
        <Image
          src="/images/0.jpg"
          alt="Hobson Lodge exterior on Hobson Street"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#18130c]/55" />

        <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-end px-5 pb-8 text-white sm:min-h-[calc(100vh-6rem)] sm:pb-10 lg:px-8">
          <div className="max-w-5xl">
            <p data-reveal className="mb-5 inline-flex rounded-lg bg-[#d9b13b] px-4 py-2 text-xs font-black uppercase text-[#18130c] shadow-lg">
              Auckland CBD hostel
            </p>
            <h1 data-reveal className="reveal-delay-1 text-4xl font-black uppercase leading-none min-[420px]:text-5xl sm:text-7xl lg:text-8xl">
              Hobson Lodge
            </h1>
            <p data-reveal className="reveal-delay-2 mt-5 max-w-2xl text-base leading-7 text-[#f8f3e8] sm:mt-6 sm:text-xl sm:leading-8">
              Newly refurbished Auckland CBD accommodation with decorated bedrooms, hotel grade mattresses, a spacious living room and a modern shared kitchen.
            </p>
          </div>

          <div data-reveal className="reveal-delay-3 mt-8 grid gap-3 rounded-xl border border-white/40 bg-white/10 p-4 text-xs font-semibold uppercase text-[#f8f3e8] shadow-lg sm:mt-10 sm:grid-cols-3 sm:p-5 sm:text-sm">
            {heroFacts.map((fact) => (
              <p key={fact.label} className="flex items-center gap-3">
                <span className={darkIconBoxClassName}>
                  <SiteIcon name={fact.icon} />
                </span>
                <span>{fact.label}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#18130c] px-5 py-5 text-[#f8f3e8] lg:px-8">
        <div data-reveal className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-bold uppercase text-[#d9b13b]">
            Comfortable rooms, free WiFi, modern kitchen and central CBD access.
          </p>
          <BookButton
            className="rounded-lg border border-[#d9b13b] px-5 py-3 text-sm font-bold uppercase text-[#d9b13b] shadow-lg hover:bg-[#d9b13b] hover:text-[#18130c]"
          >
            Book now
          </BookButton>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal>
            <p className="text-sm font-black uppercase text-[#2f85a7]">In the heart of the city</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
              In the heart of Auckland CBD.
            </h2>
          </div>
          <div data-reveal className="reveal-delay-1 space-y-4 text-base leading-7 text-[#3a3024] sm:space-y-5 sm:text-lg sm:leading-8">
            <p>
              Hobson Lodge is newly refurbished with decorated bedrooms, hotel grade mattresses, spacious shared living areas and a modern kitchen.
            </p>
            <p>
              Stay for a night or a few weeks while you are in Auckland for business, concerts, work or study. Reception is available daily if you have questions before you arrive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              data-reveal
              className={`rounded-xl border border-[#d9b13b]/40 bg-[#f8f3e8] p-6 shadow-lg ${
                index % 3 === 1 ? "reveal-delay-1" : index % 3 === 2 ? "reveal-delay-2" : ""
              }`}
            >
              <div className={iconBoxClassName}>
                <SiteIcon name={feature.icon} />
              </div>
              <p className="mt-5 text-lg font-bold">{feature.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#4f6f57]">Rooms and spaces</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
                Pick your pace.
              </h2>
            </div>
            <Link href="/rooms" className="text-sm font-bold uppercase underline underline-offset-4 hover:text-[#8c6a0c]">
              View rooms
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {roomSummaries.map((room, index) => (
              <article
                key={room.title}
                data-reveal
                className={`overflow-hidden rounded-xl border border-[#18130c]/15 bg-white shadow-lg ${
                  index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                }`}
              >
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
                  <div className={roomCountIconClassName}>
                    <SiteIcon name={room.icon} />
                    <span className="min-w-7 rounded-lg bg-[#d9b13b] px-2 py-1 text-center text-xs font-black uppercase leading-none">
                      {room.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-black uppercase sm:text-2xl">{room.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#3a3024] sm:text-base sm:leading-7">{room.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4f6f57] px-5 py-12 text-white sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal
              className={`rounded-xl border border-white/30 bg-white/10 p-5 shadow-lg ${
                index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : index === 3 ? "reveal-delay-3" : ""
              }`}
            >
              <div className={darkIconBoxClassName}>
                <SiteIcon name={stat.icon} />
              </div>
              <p className="mt-5 text-4xl font-black uppercase leading-none sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-bold uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="text-sm font-black uppercase text-[#4f6f57]">Useful links</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
              Plan more of Auckland.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {usefulLinks.map((link, index) => (
              <a
                key={link.label}
                data-reveal
                href={link.href}
                className={`flex items-center gap-4 rounded-xl border border-[#18130c]/15 bg-[#f8f3e8] p-5 font-bold shadow-md hover:border-[#d9b13b] hover:text-[#8c6a0c] ${
                  index % 2 === 1 ? "reveal-delay-1" : ""
                }`}
                rel="noreferrer"
                target="_blank"
              >
                <span className={linkIconBoxClassName}>
                  <SiteIcon name={link.icon} />
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div data-reveal>
            <p className="text-sm font-black uppercase text-[#2f85a7]">Location</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
              Close to the city, easy to get around.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#3a3024] sm:mt-6 sm:text-lg sm:leading-8">
              Find us at 224 Hobson Street in Auckland CBD, close to Queen Street, Sky Tower, InterCity Bus Terminal and public transport.
            </p>
          </div>
          <div data-reveal className="reveal-delay-1 overflow-hidden rounded-xl border border-[#18130c]/15 bg-white shadow-lg">
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
