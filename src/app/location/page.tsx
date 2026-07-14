import Image from "next/image";
import Link from "next/link";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import LocationCardTile from "../../components/LocationCardTile";
import PageHero from "../../components/PageHero";
import { locationCardSections } from "../../lib/locationCards";
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

const googleMapsApiKey = getRequiredEnv("NEXT_PUBLIC_GOOGLE_MAPS_API_KEY");

export default function Location() {
  return (
    <main className="bg-[#f8f3e8] text-[#18130c]">
      <PageHero
        eyebrow="Location"
        imageAlt="Sky Tower near Hobson Lodge in Auckland CBD"
        imageSrc="/images/skytower.jpg"
        title="Auckland on your doorstep."
      >
        <p>
          Hobson Lodge is close and convenient, putting central Auckland attractions, transport, supermarket stops and city parks within walking distance.
        </p>
      </PageHero>

      <section className="px-5 py-12 sm:py-16 lg:px-8">
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
            Nearby Auckland from Hobson Lodge.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#3a3024] sm:text-lg sm:leading-8">
            Distances and travel times are estimated from 224 Hobson Street, with popular landmarks highlighted for easy trip planning.
          </p>
        </div>
        <div className="mx-auto max-w-7xl space-y-14">
          {locationCardSections.map((section) => (
            <div key={section.title}>
              <div data-reveal className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                <div>
                  <p className="text-sm font-black uppercase text-[#2f85a7]">{section.title}</p>
                  <h3 className="mt-3 text-3xl font-black uppercase leading-none sm:text-4xl">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm leading-6 text-[#3a3024] sm:text-base sm:leading-7">
                  {section.intro}
                </p>
              </div>
              <div className="grid grid-flow-dense items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                {section.cards.map((card, index) => (
                  <LocationCardTile
                    key={card.title}
                    card={card}
                    category={section.title}
                    index={index}
                  />
                ))}
              </div>
            </div>
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
