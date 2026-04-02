import Image from "next/image";

export default function rooms() {
    return (
        <main className="bg-white">
            <Image
                src="/images/0.jpg"
                alt="hero image"
                width={1600}
                height={800}
                className="w-full object-cover h-[680px]"
            />
            <div className="text-center flex flex-col gap-y-8">
                <h1 className="text-6xl text-black pt-10">
                    OUR ROOMS
                </h1>   
            </div>
        </main>
    )
}