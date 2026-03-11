import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/images/0.jpg"
        alt="mainhero"
        width={800}
        height={1600}
        className="w-full h-[660px] object-cover"
      />
    </main>
  );
}
