import Image from "next/image";

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
        <h2>
          IN THE HEART OF CBD
        </h2>
        <p>
          Hobson Lodge is newly refurbished with decorated bed rooms, hotel grade mattress, spacious living room and kitchen. Hobson Lodge is good to stay here for a night or for weeks, stay here while on business trip or at some kind of concerts or work and study in Auckland - either way our lodge is the best possible variant. Feel free to contact us anytime in case you have any questions or concerns.
        </p>
      </div>
    </main>
  );
}
