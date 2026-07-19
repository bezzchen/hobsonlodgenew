import Image from "next/image";
import type { LocationCard } from "../lib/locationCards";
import SiteIcon from "./SiteIcon";

type LocationCardTileProps = {
  card: LocationCard;
  category: string;
  index?: number;
};

export default function LocationCardTile({ card, category, index = 0 }: LocationCardTileProps) {
  const isFeatured = Boolean(card.featured);

  return (
    <article
      data-reveal
      className={`group flex h-full min-h-[340px] flex-col overflow-hidden rounded-xl border shadow-lg ${
        isFeatured
          ? "border-[#18130c]/15 bg-[#18130c] text-[#f8f3e8] lg:col-span-2"
          : "border-[#18130c]/10 bg-white text-[#18130c]"
      } ${
        index % 4 === 1 ? "reveal-delay-1" : index % 4 === 2 ? "reveal-delay-2" : index % 4 === 3 ? "reveal-delay-3" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${isFeatured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          <Image
            src={card.image}
            alt={`${card.title} near Hobson Lodge`}
            fill
            sizes={isFeatured
              ? "(min-width: 1024px) 50vw, (min-width: 640px) 100vw, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className={`absolute inset-0 ${isFeatured ? "bg-gradient-to-t from-[#18130c]/80 via-[#18130c]/25 to-transparent" : "bg-gradient-to-t from-[#18130c]/30 to-transparent"}`} />
          <p className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-[#d9b13b] px-4 py-2 text-xs font-black uppercase text-[#18130c] shadow-lg">
            <SiteIcon className="h-4 w-4" name={card.icon} />
            {card.travel}
          </p>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <p className={`text-xs font-black uppercase tracking-[0.16em] ${isFeatured ? "text-[#d9b13b]" : "text-[#4f6f57]"}`}>
            {category}
          </p>
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-md ${
              isFeatured ? "bg-white/15 text-[#d9b13b]" : "bg-[#d9b13b] text-[#18130c]"
            }`}
          >
            <SiteIcon name={card.icon} />
          </span>
        </div>

        <h3 className={`mt-5 font-black uppercase leading-tight ${isFeatured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>
          {card.title}
        </h3>
        <p className={`mt-4 text-sm leading-6 sm:text-base sm:leading-7 ${isFeatured ? "text-[#f8f3e8]/78" : "text-[#3a3024]"}`}>
          {card.description}
        </p>

        <div className="mt-auto grid gap-3 pt-6 sm:grid-cols-2">
          <div className={`rounded-xl p-4 ${isFeatured ? "bg-white/10" : "bg-[#f8f3e8]"}`}>
            <p className={`text-xs font-black uppercase tracking-[0.12em] ${isFeatured ? "text-[#d9b13b]" : "text-[#4f6f57]"}`}>
              Distance
            </p>
            <p className="mt-2 text-lg font-black">{card.distance}</p>
          </div>
          <div className={`rounded-xl p-4 ${isFeatured ? "bg-white/10" : "bg-[#f8f3e8]"}`}>
            <p className={`text-xs font-black uppercase tracking-[0.12em] ${isFeatured ? "text-[#d9b13b]" : "text-[#4f6f57]"}`}>
              Travel
            </p>
            <p className="mt-2 text-lg font-black">{card.travel}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
