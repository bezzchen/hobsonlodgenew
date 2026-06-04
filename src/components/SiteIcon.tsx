import type { ReactNode } from "react";

export type SiteIconName =
  | "age"
  | "art"
  | "at"
  | "ban"
  | "bed"
  | "bus"
  | "calendar"
  | "card"
  | "clock"
  | "compass"
  | "fan"
  | "id"
  | "key"
  | "kitchen"
  | "laundry"
  | "locker"
  | "mail"
  | "mapPin"
  | "mattress"
  | "museum"
  | "parking"
  | "people"
  | "phone"
  | "room"
  | "search"
  | "shield"
  | "shopping"
  | "sound"
  | "sparkle"
  | "swap"
  | "tent"
  | "tower"
  | "tv"
  | "university"
  | "utensils"
  | "warning"
  | "wifi"
  | "wind";

type SiteIconProps = {
  className?: string;
  name: SiteIconName;
};

const icons: Record<SiteIconName, ReactNode> = {
  age: (
    <>
      <circle cx="24" cy="15" r="6" />
      <path d="M13 38c2-8 20-8 22 0" />
      <path d="M15 12h18" />
      <path d="M18 9h12" />
    </>
  ),
  art: (
    <>
      <rect x="9" y="10" width="30" height="26" rx="3" />
      <path d="M15 30l7-8 5 5 4-4 4 7" />
      <circle cx="30" cy="18" r="3" />
    </>
  ),
  at: (
    <>
      <rect x="7" y="10" width="34" height="28" rx="6" />
      <text
        x="24"
        y="30"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="900"
        stroke="none"
        textAnchor="middle"
      >
        AT
      </text>
    </>
  ),
  ban: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M13 13l22 22" />
    </>
  ),
  bed: (
    <>
      <path d="M8 20h32a4 4 0 0 1 4 4v11" />
      <path d="M8 13v22" />
      <path d="M8 26h36" />
      <path d="M12 18h10a4 4 0 0 1 4 4v4H12z" />
      <path d="M26 18h10a4 4 0 0 1 4 4v4H26z" />
    </>
  ),
  bus: (
    <>
      <rect x="11" y="8" width="26" height="28" rx="5" />
      <path d="M15 18h18" />
      <path d="M15 25h18" />
      <circle cx="18" cy="36" r="3" />
      <circle cx="30" cy="36" r="3" />
      <path d="M16 12h16" />
    </>
  ),
  calendar: (
    <>
      <rect x="9" y="11" width="30" height="28" rx="4" />
      <path d="M16 7v8" />
      <path d="M32 7v8" />
      <path d="M9 20h30" />
      <path d="M16 27h4" />
      <path d="M24 27h4" />
      <path d="M16 33h4" />
    </>
  ),
  card: (
    <>
      <rect x="8" y="13" width="32" height="23" rx="4" />
      <path d="M8 20h32" />
      <path d="M15 29h8" />
      <path d="M29 29h4" />
    </>
  ),
  clock: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 14v11l7 4" />
    </>
  ),
  compass: (
    <>
      <circle cx="24" cy="24" r="16" />
      <path d="M30 18l-4 10-8 4 4-10z" />
      <circle cx="24" cy="24" r="2" />
    </>
  ),
  fan: (
    <>
      <circle cx="24" cy="24" r="3" />
      <path d="M24 21c-1-8 5-13 10-9 3 3-1 9-7 11" />
      <path d="M26 25c7 4 8 12 2 14-4 1-7-5-6-12" />
      <path d="M22 25c-7 4-13 1-12-5 1-4 8-4 12 1" />
    </>
  ),
  id: (
    <>
      <rect x="9" y="12" width="30" height="24" rx="4" />
      <circle cx="19" cy="23" r="4" />
      <path d="M14 32c2-5 8-5 10 0" />
      <path d="M28 21h6" />
      <path d="M28 28h6" />
    </>
  ),
  key: (
    <>
      <circle cx="18" cy="25" r="6" />
      <path d="M24 25h16" />
      <path d="M34 25v5" />
      <path d="M39 25v4" />
    </>
  ),
  kitchen: (
    <>
      <path d="M14 8v32" />
      <path d="M10 8v11a4 4 0 0 0 8 0V8" />
      <path d="M29 8v32" />
      <path d="M29 8c7 3 8 16 0 19" />
    </>
  ),
  laundry: (
    <>
      <rect x="11" y="8" width="26" height="32" rx="4" />
      <circle cx="24" cy="26" r="8" />
      <path d="M18 26c4-4 8 4 12 0" />
      <path d="M17 14h2" />
      <path d="M23 14h8" />
    </>
  ),
  locker: (
    <>
      <rect x="12" y="8" width="24" height="32" rx="3" />
      <path d="M24 8v32" />
      <path d="M17 16h4" />
      <path d="M27 16h4" />
      <path d="M19 26h1" />
      <path d="M29 26h1" />
    </>
  ),
  mail: (
    <>
      <rect x="8" y="13" width="32" height="24" rx="4" />
      <path d="M10 17l14 11 14-11" />
    </>
  ),
  mapPin: (
    <>
      <path d="M24 42s13-11 13-23a13 13 0 0 0-26 0c0 12 13 23 13 23z" />
      <circle cx="24" cy="19" r="5" />
    </>
  ),
  mattress: (
    <>
      <rect x="8" y="18" width="32" height="14" rx="4" />
      <path d="M12 32v5" />
      <path d="M36 32v5" />
      <path d="M14 18c2 3 4 3 6 0 2 3 4 3 6 0 2 3 4 3 6 0" />
    </>
  ),
  museum: (
    <>
      <path d="M8 18h32" />
      <path d="M12 18l12-8 12 8" />
      <path d="M13 22v14" />
      <path d="M21 22v14" />
      <path d="M29 22v14" />
      <path d="M37 22v14" />
      <path d="M9 36h30" />
    </>
  ),
  parking: (
    <>
      <rect x="9" y="9" width="30" height="30" rx="7" />
      <path d="M19 33V15h8a6 6 0 0 1 0 12h-8" />
    </>
  ),
  people: (
    <>
      <circle cx="18" cy="17" r="5" />
      <circle cx="31" cy="18" r="4" />
      <path d="M9 37c2-9 16-9 18 0" />
      <path d="M25 33c2-5 10-5 12 1" />
    </>
  ),
  phone: (
    <>
      <path d="M16 9l5 9-5 4c3 6 8 11 14 14l4-5 9 5c-1 4-4 7-8 7-14-2-25-13-27-27 0-4 3-7 8-7z" />
    </>
  ),
  room: (
    <>
      <path d="M12 39V9h21l3 4v26" />
      <path d="M18 39V15h15" />
      <path d="M27 26h1" />
    </>
  ),
  search: (
    <>
      <circle cx="21" cy="21" r="10" />
      <path d="M29 29l10 10" />
    </>
  ),
  shield: (
    <>
      <path d="M24 42s14-6 14-20V11L24 6 10 11v11c0 14 14 20 14 20z" />
      <path d="M17 24l5 5 10-11" />
    </>
  ),
  shopping: (
    <>
      <path d="M12 18h24l-2 21H14z" />
      <path d="M18 18a6 6 0 0 1 12 0" />
      <path d="M18 27h12" />
      <path d="M20 33h8" />
    </>
  ),
  sound: (
    <>
      <path d="M10 28h7l10 8V12l-10 8h-7z" />
      <path d="M32 20c2 2 2 6 0 8" />
      <path d="M36 16c5 5 5 11 0 16" />
    </>
  ),
  sparkle: (
    <>
      <path d="M24 7l4 12 12 5-12 5-4 12-5-12-11-5 11-5z" />
      <path d="M38 7l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5z" />
    </>
  ),
  swap: (
    <>
      <path d="M12 17h23" />
      <path d="M29 11l6 6-6 6" />
      <path d="M36 31H13" />
      <path d="M19 25l-6 6 6 6" />
    </>
  ),
  tent: (
    <>
      <path d="M7 38l17-28 17 28z" />
      <path d="M24 10v28" />
      <path d="M24 38l8-13" />
      <path d="M16 38l8-13" />
    </>
  ),
  tower: (
    <>
      <path d="M24 6v36" />
      <path d="M15 18h18" />
      <path d="M18 13h12" />
      <path d="M19 42l5-24 5 24" />
      <circle cx="24" cy="10" r="3" />
    </>
  ),
  tv: (
    <>
      <rect x="8" y="12" width="32" height="23" rx="3" />
      <path d="M18 40h12" />
      <path d="M24 35v5" />
    </>
  ),
  university: (
    <>
      <path d="M7 18l17-8 17 8-17 8z" />
      <path d="M14 22v9c5 4 15 4 20 0v-9" />
      <path d="M39 20v10" />
    </>
  ),
  utensils: (
    <>
      <path d="M14 8v32" />
      <path d="M10 8v11a4 4 0 0 0 8 0V8" />
      <path d="M31 8c4 3 6 8 6 15s-2 12-6 15V8z" />
    </>
  ),
  warning: (
    <>
      <path d="M24 7l19 33H5z" />
      <path d="M24 18v10" />
      <path d="M24 34h.1" />
    </>
  ),
  wifi: (
    <>
      <path d="M8 18c9-8 23-8 32 0" />
      <path d="M15 25c5-5 13-5 18 0" />
      <path d="M21 32c2-2 4-2 6 0" />
      <circle cx="24" cy="38" r="1" />
    </>
  ),
  wind: (
    <>
      <path d="M7 18h24a5 5 0 1 0-5-5" />
      <path d="M7 26h32" />
      <path d="M7 34h22a5 5 0 1 1-5 5" />
    </>
  ),
};

export default function SiteIcon({ className = "h-6 w-6", name }: SiteIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.4"
      viewBox="0 0 48 48"
    >
      {icons[name]}
    </svg>
  );
}
