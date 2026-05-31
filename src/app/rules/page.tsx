import Link from "next/link";

const rules = [
  {
    title: "Reception and check-in",
    copy: "Reception is open daily from 9:30am to 5pm. Check-in is from 2pm to 5pm. Early check-in depends on availability. Contact us before arrival if you need after-hours self check-in.",
  },
  {
    title: "Check-out",
    copy: "Guests must remove belongings from the room and check out by 10am. Ask reception if you need luggage storage. Late check-out may be charged as an extra night.",
  },
  {
    title: "Age restriction",
    copy: "Guests must be at least 18 years old to stay at Hobson Lodge.",
  },
  {
    title: "Photo ID and key deposit",
    copy: "A valid photo ID and a NZ$20 cash key deposit are required at check-in.",
  },
  {
    title: "Room allocation",
    copy: "Dorm beds for groups cannot always be placed in the same room. Book a private room if you need to stay together.",
  },
  {
    title: "Kitchen",
    copy: "The kitchen is for hostel residents. Please wash dishes, clean cookware and leave the cooking area ready for the next guest.",
  },
  {
    title: "Visitors",
    copy: "Visitor hours are 10am to 4pm. Visitors must report to the office. Non-residents cannot remain after visitor hours and may be asked to leave.",
  },
  {
    title: "No alcohol and no smoking",
    copy: "Alcohol and smoking are not permitted on the hostel premises.",
  },
  {
    title: "Property and behaviour",
    copy: "Guests are expected to respect other guests, staff, residents and hostel property. Damage may need to be reimbursed.",
  },
  {
    title: "Bed changes",
    copy: "Please ask reception before changing beds. Unapproved bed changes may result in extra charges.",
  },
  {
    title: "Laundry",
    copy: "Please use the dryer for wet clothes and do not hang laundry on beds or around dorm rooms.",
  },
  {
    title: "Belongings",
    copy: "Secure lockers are provided in dorm rooms. Guests are responsible for keeping personal belongings secure.",
  },
  {
    title: "Quiet hours",
    copy: "Keep volume low in corridors and dorm rooms, especially at night. Phones and sound devices should not disturb other guests.",
  },
  {
    title: "Cancellation and no-show",
    copy: "Free cancellation or modification is available up to 48 hours before 2pm New Zealand local time on the check-in date. Late cancellation, modification or no-show may be charged the first night.",
  },
  {
    title: "Pre-authorisation",
    copy: "The lodge may pre-authorise the first night's amount on your credit card before arrival. This is not a charge.",
  },
  {
    title: "Prohibited behaviour",
    copy: "Drugs, drunkenness, noisy or disorderly behaviour, abuse and physical violence are prohibited. Guests who breach hostel rules may be checked out.",
  },
];

export default function Rules() {
  return (
    <main className="bg-[#f8f3e8] pt-28 text-[#18130c] sm:pt-24">
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase text-[#2f85a7]">Hostel rules</p>
            <h1 className="mt-4 text-6xl font-black uppercase leading-none md:text-7xl">
              Rules for every stay.
            </h1>
          </div>
          <p className="text-lg leading-8 text-[#3a3024]">
            These policies help keep Hobson Lodge clean, secure and comfortable for everyone staying with us.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {rules.map((rule, index) => (
            <article key={rule.title} className="rounded-xl border border-[#18130c]/15 bg-white p-6 shadow-lg">
              <p className="text-sm font-black uppercase text-[#d9b13b]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-2xl font-black uppercase">{rule.title}</h2>
              <p className="mt-3 leading-7 text-[#3a3024]">{rule.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#18130c] px-5 py-16 text-center text-[#f8f3e8] lg:px-8">
        <h2 className="mx-auto max-w-4xl text-5xl font-black uppercase leading-none">
          Questions about arrival or policies?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
          Contact reception before your stay and we will help you plan the smoothest arrival.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-lg border border-[#d9b13b] bg-[#d9b13b] px-6 py-3 text-sm font-bold uppercase text-[#18130c] shadow-lg hover:bg-transparent hover:text-[#d9b13b]"
        >
          Contact us
        </Link>
      </section>
    </main>
  );
}
