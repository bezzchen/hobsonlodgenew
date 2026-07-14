import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  children: ReactNode;
  eyebrow: string;
  imageAlt: string;
  imageSrc: string;
  priority?: boolean;
  title: string;
};

export default function PageHero({
  children,
  eyebrow,
  imageAlt,
  imageSrc,
  priority = true,
  title,
}: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[58svh] overflow-hidden bg-[#18130c] pt-20 text-white sm:pt-24">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#18130c]/60" />
      <div className="relative mx-auto flex min-h-[calc(58svh-5rem)] max-w-7xl flex-col justify-end px-5 py-12 sm:min-h-[calc(58svh-6rem)] sm:py-16 lg:px-8">
        <div className="max-w-4xl">
          <p data-reveal className="text-sm font-black uppercase text-[#d9b13b]">
            {eyebrow}
          </p>
          <h1 data-reveal className="reveal-delay-1 mt-4 text-4xl font-black uppercase leading-none sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <div data-reveal className="reveal-delay-2 mt-5 max-w-2xl text-base leading-7 text-[#f8f3e8] sm:mt-6 sm:text-lg sm:leading-8">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
