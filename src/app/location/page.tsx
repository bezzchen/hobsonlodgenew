import Image from "next/image";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import SiteIcon, { type SiteIconName } from "../../components/SiteIcon";
import { getRequiredEnv } from "../../lib/env";
import { createSeoMetadata } from "../../lib/seo";

export const metadata = createSeoMetadata({
  title: "Auckland CBD Hostel Location",
  description:
    "Find Hobson Lodge at 224 Hobson Street in Auckland CBD, close to Sky Tower, Queen Street, InterCity Bus Terminal, Britomart and central city attractions.",
  path: "/location",
  imageUrl: "/images/skytower.jpg",
  imageAlt: "Sky Tower near Hobson Lodge in Auckland CBD",
});

const locationNotes = [
  {
    title: "The University of Auckland",
    walkTime: "17 minute walk",
    icon: "university",
    image: "/images/universityofauckland.jpg",
    alt: "The University of Auckland campus",
    copy: "A central campus close enough for visiting students, families and academic trips.",
  },
  {
    title: "Britomart Transport Centre",
    walkTime: "18 minute walk",
    icon: "at",
    image: "/images/3.jpg",
    alt: "Auckland CBD street frontage near Hobson Lodge",
    copy: "Connect to trains, buses and downtown ferry links from the city centre.",
  },
  {
    title: "Auckland Museum and Domain",
    walkTime: "30 minute walk",
    icon: "museum",
    image: "/images/aucklandmuseum.jpg",
    alt: "Auckland Museum and Domain",
    copy: "A longer city walk to one of Auckland's best-known cultural landmarks.",
  },
  {
    title: "Countdown Supermarket",
    walkTime: "15 minute walk",
    icon: "shopping",
    image: "/images/1.jpg",
    alt: "Hobson Lodge shared kitchen",
    copy: "Pick up groceries nearby and make the most of the lodge kitchen.",
  },
  {
    title: "Sky Tower",
    walkTime: "8 minute walk",
    icon: "tower",
    image: "/images/skytower.jpg",
    alt: "Sky Tower at sunset",
    copy: "A quick walk to Auckland's skyline icon, restaurants and entertainment.",
  },
  {
    title: "InterCity Bus Terminal",
    walkTime: "6 minute walk",
    icon: "bus",
    image: "/images/0.jpg",
    alt: "Hobson Lodge exterior on Hobson Street",
    copy: "Convenient for arrivals, departures and day trips around New Zealand.",
  },
  {
    title: "Albert Park",
    walkTime: "15 minute walk",
    icon: "tent",
    image: "/images/universityofauckland.jpg",
    alt: "Green grounds near the University of Auckland and Albert Park",
    copy: "A leafy city break near the university precinct and central galleries.",
  },
  {
    title: "Queen Street",
    walkTime: "7 minute walk",
    icon: "mapPin",
    image: "/images/2.jpg",
    alt: "Hobson Lodge corridor leading toward central Auckland",
    copy: "Reach Auckland's main retail street, food spots and city connections quickly.",
  },
] satisfies {
  alt: string;
  copy: string;
  icon: SiteIconName;
  image: string;
  title: string;
  walkTime: string;
}[];

const googleMapsApiKey = getRequiredEnv("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY");

const iconBoxClassName =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#d9b13b] text-[#18130c] shadow-md";

export default function Location() {
  return (
    <main className="bg-[#f8f3e8] pt-20 text-[#18130c] sm:pt-24">
      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-reveal>
            <p className="text-sm font-black uppercase text-[#2f85a7]">Location</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
              CBD location.
            </h1>
          </div>
          <p data-reveal className="reveal-delay-1 text-base leading-7 text-[#3a3024] sm:text-lg sm:leading-8">
            Hobson Lodge is close and convenient, putting central Auckland attractions, transport, supermarket stops and city parks within walking distance.
          </p>
        </div>
      </section>

      <section className="px-5 pb-12 sm:pb-16 lg:px-8">
        <div data-reveal className="mx-auto overflow-hidden rounded-xl border border-[#18130c]/15 bg-white shadow-lg">
          <GoogleMapsEmbed
            apiKey={googleMapsApiKey}
            height={420}
            width="100%"
            mode="place"
            q="224+Hobson+Street+Auckland+CBD,+Auckland+1010,+New+Zealand"
          />
        </div>
      </section>

      <section className="px-5 pb-14 sm:pb-20 lg:px-8">
        <div data-reveal className="mx-auto mb-10 max-w-7xl">
          <p className="text-sm font-black uppercase text-[#4f6f57]">Close and convenient</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
            Walking times from Hobson Lodge.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#3a3024] sm:text-lg sm:leading-8">
            Step out from Hobson Street and reach transport, supermarkets, landmarks, parks and Queen Street without needing a car.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {locationNotes.map((note, index) => (
            <article
              key={note.title}
              data-reveal
              className={`group overflow-hidden rounded-2xl border border-[#18130c]/10 bg-white shadow-xl ${
                index % 4 === 1 ? "reveal-delay-1" : index % 4 === 2 ? "reveal-delay-2" : index % 4 === 3 ? "reveal-delay-3" : ""
              } ${index === 0 || index === 4 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 || index === 4 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <Image
                  src={note.image}
                  alt={note.alt}
                  fill
                  sizes={index === 0 || index === 4 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18130c]/70 via-[#18130c]/15 to-transparent" />
                <p className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#d9b13b] px-4 py-2 text-xs font-black uppercase text-[#18130c] shadow-lg">
                  <SiteIcon className="h-4 w-4" name={note.icon} />
                  {note.walkTime}
                </p>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className={iconBoxClassName}>
                    <SiteIcon name={note.icon} />
                  </div>
                  <p className="text-sm font-black uppercase text-[#4f6f57]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-2 text-xl font-black uppercase leading-tight sm:text-2xl">{note.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#3a3024] sm:mt-4 sm:text-base sm:leading-7">{note.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-[#18130c] text-[#f8f3e8] lg:grid-cols-2">
        <div data-reveal className="relative min-h-[260px] sm:min-h-[360px]">
          <Image
            src="/images/skytower.jpg"
            alt="Sky Tower near Hobson Lodge"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div data-reveal className="reveal-delay-1 flex flex-col justify-center px-5 py-12 sm:py-16 lg:px-16">
          <p className="text-sm font-black uppercase text-[#d9b13b]">Arrival</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
            Need after-hours check-in?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">
            Reception is open daily from 9:30am to 5pm, and check-in runs from 2pm to 5pm. Please contact Hobson Lodge directly for after-hours arrival details.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit rounded-lg border border-[#d9b13b] bg-[#d9b13b] px-6 py-3 text-sm font-bold uppercase text-[#18130c] shadow-lg hover:bg-transparent hover:text-[#d9b13b]"
          >
            Contact reception
          </Link>
        </div>
      </section>
    </main>
  );
}
