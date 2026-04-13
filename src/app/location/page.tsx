import Image from 'next/image';
export default function location() {
    return (
        <main className="bg-white">
            <Image
                src="/images/0.jpg"
                alt="hero image"
                width={1600}
                height={800}
                className="w-full object-cover h-[690px] pt-16"
            />
            <div className="flex flex-col gap-y-8 text-center">  
                <h1 className="text-6xl text-black pt-10">
                    CBD LOCATION
                </h1>
            </div>
        </main>
    )
}