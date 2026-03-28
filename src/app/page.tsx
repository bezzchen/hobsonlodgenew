import Image from "next/image";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Home() {
  return (
    <main className="bg-white">
      <Image
        src="/images/0.jpg"
        alt="mainhero"
        width={800}
        height={1600}
        className="w-full h-[660px] object-cover"
      />
      <div className="flex flex-col gap-y-8 text-center">
        <h1 className="text-8xl text-black mt-8">
          HOBSON LODGE
        </h1>
        <h2 className="text-6xl text-black">
          IN THE HEART OF CBD
        </h2>
        <p className="max-w-4xl text-black text-xl mx-auto pb-10">
        Hobson Lodge offers a comfortable and welcoming stay in the centre of Auckland, ideal for solo travellers, backpackers, and long-stay guests.
Conveniently located just 300 metres from Sky Tower, with easy access to public transport and the motorway, getting around the city is simple and efficient. The entrance is right by the main route connecting to State Highway 1, making travel to and from the lodge quick and convenient.
Designed with a focus on air quality, comfort, and personal space, we provide a more enjoyable and relaxing hostel experience:
Privacy curtains for every bed, creating your own personal space 
Individual power outlet at each bed for convenient charging 
Large windows in every room with plenty of natural light 
Fresh air ventilation system in all rooms, providing a cleaner and more comfortable environment 
Secure double-door access system (guest-only entry) for added safety 
Guests can also enjoy a clean and well-maintained environment, a fully equipped kitchen, and a relaxed, friendly atmosphere.
More privacy, more comfort, more fresh air – a better hostel experience.
Whether you're staying for a night or a few weeks, Hobson Lodge is a great choice for business trips, concerts, work, or study in Auckland.
If you have any questions, feel free to contact us anytime – we’re always happy to help.
        </p>
      </div>
      <div className="w-full overflow-hidden rounded-4xl max-w-6xl mx-auto shadow-lg">
        <GoogleMapsEmbed
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          height={450}
          width="100%"
          mode="place"
          q="224+Hobson+Street+Auckland+CBD,+Auckland+1010,+New+Zealand"
        />
      </div>
    </main>
  );
}
