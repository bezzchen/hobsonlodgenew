import Image from "next/image";
import Link from "next/link";
import BookButton from "../../components/BookButton";
import SiteIcon, { type SiteIconName } from "../../components/SiteIcon";

const roomOptions = [
  {
    title: "Bed in 8 Bed Mixed Dormitory Room",
    image: "/images/bedin8_1.jpg",
    summary: "Shared bathroom, shared toilet, ventilation system and free WiFi.",
    icon: "bed",
    badge: "8",
    details: [
      "Cable television",
      "Microwave",
    ],
  },
  {
    title: "Bed in 6 Bed Mixed Dormitory Room",
    image: "/images/bedin6m_1.jpg",
    summary: "Shared bathroom, shared toilet, ventilation system and free WiFi.",
    icon: "bed",
    badge: "6",
    details: [],
  },
  {
    title: "Bed in 6 Bed Female Dormitory Room",
    image: "/images/bedin6f_1.jpg",
    summary: "Female dormitory accommodation with shared bathroom, shared toilet, ventilation and free WiFi.",
    icon: "bed",
    badge: "6",
    details: [],
  },
  {
    title: "Double Room with Shared Bathroom",
    image: "/images/dbs_1.jpg",
    summary: "A private double room with shared bathroom access and free WiFi.",
    icon: "bed",
    badge: "2",
    details: [],
  },
  {
    title: "Double Room with Ensuite",
    image: "/images/dbe_1.jpg",
    summary: "A private double room with ensuite bathroom, microwave and free WiFi.",
    icon: "bed",
    badge: "2",
    details: [
      "Private bathroom",
      "Microwave",
    ],
  },
] satisfies {
  badge: string;
  details: string[];
  icon: SiteIconName;
  image: string;
  summary: string;
  title: string;
}[];

const amenities = [
  { label: "Room services", icon: "room" },
  { label: "220-240 volt circuits", icon: "sparkle" },
  { label: "Heaters in all rooms", icon: "sparkle" },
  { label: "Onsite parking ($15 NZD/day)", icon: "parking" },
  { label: "Fully supplied bed linen", icon: "bed" },
  { label: "Hairdryers available", icon: "wind" },
  { label: "Individual under bed lockers", icon: "locker" },
  { label: "Individual storage cabinets", icon: "locker" },
  { label: "Ventilation system in all rooms", icon: "wind" },
  { label: "Laundry facilities", icon: "laundry" },
  { label: "Fans in all rooms", icon: "fan" },
  { label: "Free WiFi access in all areas", icon: "wifi" },
  { label: "Internet cafe", icon: "wifi" },
  { label: "Superior bathrooms", icon: "sparkle" },
  { label: "Modern kitchen", icon: "utensils" },
  { label: "Hotel grade mattresses", icon: "mattress" },
] satisfies { icon: SiteIconName; label: string }[];

const detailIconMap = new Map<string, SiteIconName>([
  ["Cable television", "tv"],
  ["Microwave", "kitchen"],
  ["Private bathroom", "key"],
]);

const roomCountIconClassName =
  "inline-flex w-fit items-center gap-3 rounded-xl border border-[#d9b13b]/70 bg-[#f8f3e8] px-3 py-2 text-[#18130c] shadow-md";

const smallIconBoxClassName =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f8f3e8] text-[#4f6f57] shadow-sm";

const darkIconBoxClassName =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#d9b13b] shadow-md";

export default function Rooms() {
  return (
    <main className="bg-[#f8f3e8] pt-20 text-[#18130c] sm:pt-24">
      <section className="px-5 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div data-reveal>
            <p className="text-sm font-black uppercase text-[#2f85a7]">Our rooms</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl md:text-7xl">
              Cozy and comfortable accommodation.
            </h1>
          </div>
          <p data-reveal className="reveal-delay-1 text-base leading-7 text-[#3a3024] sm:text-lg sm:leading-8">
            Hobson Lodge offers mixed dormitory beds, a female dormitory option and double rooms with either shared bathroom access or a private ensuite.
          </p>
        </div>
      </section>

      <section className="px-5 pb-14 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6">
          {roomOptions.map((room, index) => (
            <article
              key={room.title}
              data-reveal
              className={`grid overflow-hidden rounded-xl border border-[#18130c]/15 bg-white shadow-lg lg:grid-cols-2 ${
                index % 2 === 1 ? "reveal-delay-1" : ""
              }`}
            >
              <div className={`relative min-h-[220px] sm:min-h-[320px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-10">
                <p className="text-sm font-black uppercase text-[#4f6f57]">
                  Limited onsite parking available by pre-booking; charges apply.
                </p>
                <div className={`${roomCountIconClassName} mt-5`}>
                  <SiteIcon name={room.icon} />
                  <span className="min-w-7 rounded-lg bg-[#d9b13b] px-2 py-1 text-center text-xs font-black uppercase leading-none">
                    {room.badge}
                  </span>
                </div>
                <h2 className="mt-3 text-3xl font-black uppercase leading-none sm:text-4xl">{room.title}</h2>
                <p className="mt-4 text-base leading-7 text-[#3a3024] sm:mt-5 sm:text-lg sm:leading-8">{room.summary}</p>
                {room.details.length > 0 ? (
                  <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                    {room.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-3 rounded-lg border border-[#d9b13b]/60 p-3 text-sm font-semibold shadow-sm sm:text-base">
                        <span className={smallIconBoxClassName}>
                          <SiteIcon
                            className="h-5 w-5"
                            name={detailIconMap.get(detail) ?? "sparkle"}
                          />
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#18130c] px-5 py-12 text-[#f8f3e8] sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="text-sm font-black uppercase text-[#d9b13b]">Amenities</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-5xl">
              Facilities across the hostel.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {amenities.map((item, index) => (
              <div
                key={item.label}
                data-reveal
                className={`flex items-center gap-4 rounded-xl border border-white/20 p-5 font-semibold shadow-lg ${
                  index % 2 === 1 ? "reveal-delay-1" : ""
                }`}
              >
                <span className={darkIconBoxClassName}>
                  <SiteIcon className="h-5 w-5" name={item.icon} />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 text-center sm:py-20 lg:px-8">
        <h2 data-reveal className="mx-auto max-w-4xl text-4xl font-black uppercase leading-none sm:text-5xl md:text-6xl">
          Enquire now or book direct.
        </h2>
        <p data-reveal className="reveal-delay-1 mx-auto mt-5 max-w-2xl text-base leading-7 text-[#3a3024] sm:mt-6 sm:text-lg sm:leading-8">
          Ask about room availability, parking pre-booking or the best room type for your stay.
        </p>
        <div data-reveal className="reveal-delay-2 mt-8 flex flex-wrap justify-center gap-4">
          <BookButton
            className="rounded-lg border border-[#18130c] bg-[#18130c] px-6 py-3 text-sm font-bold uppercase text-white shadow-lg hover:bg-[#d9b13b] hover:text-[#18130c]"
          >
            Book now
          </BookButton>
          <Link
            href="/contact"
            className="rounded-lg border border-[#18130c] px-6 py-3 text-sm font-bold uppercase shadow-md hover:bg-white"
          >
            Enquire now
          </Link>
        </div>
      </section>
    </main>
  );
}
