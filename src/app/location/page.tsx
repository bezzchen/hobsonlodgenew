import Image from 'next/image';
export default function location() {
    return (
        <main>
            <Image
                src="/images/0.jpg"
                alt="hero image"
                width={1600}
                height={800}
                className="w-full object-cover h-[690px] pt-16"
            />
        </main>
    )
}