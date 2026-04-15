import Image from 'next/image';
import { GoogleMapsEmbed } from "@next/third-parties/google"

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
            <div className="flex flex-col gap-y-8 text-center text-black">  
                <h1 className="text-6xl pt-10">
                    CBD LOCATION
                </h1>
                <h2 className="text-3xl">
                    close and convenient 
                </h2>
                <div className="max-w-6xl mx-auto w-full rounded-4xl overflow-hidden shadow-lg">
                    <GoogleMapsEmbed
                        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                        height={450}
                        width="100%"
                        mode="place"
                        q="224+Hobson+Street+Auckland+CBD,+Auckland+1010,+New+Zealand"
                    />
                </div>
            </div>
        </main>
    )
}