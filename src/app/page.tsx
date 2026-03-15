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
      </div>
    </main>
  );
}
