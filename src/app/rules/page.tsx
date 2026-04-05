import Image from "next/image";
export default function rules() {
    return (
        <main className="bg-white">
            <Image
                src="/images/0.jpg"
                alt="herorules"
                width={1600}
                height={800}
                className="w-full object-cover h-[680px] pt-10"
            />
        </main>
    )
}