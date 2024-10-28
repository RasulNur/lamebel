import { ISingleNewsProps } from "@/types/props/pages.types";
import Image from "next/image";

export default function SingleNews({ publication }: ISingleNewsProps) {
    return (
        <>
            <Image
                src={publication.data.img}
                alt={publication.data.name}
                width={1000}
                height={500}
                className="w-full 2xl:min-h-[700px] xl:min-h-[600px] lg:min-h-[500px] sm:min-h-[400px] min-h-[300px] object-cover mb-5"
            />
            <div
                className="text-section lg:mt-10 mt-5"
                dangerouslySetInnerHTML={{
                    __html: publication.data.body,
                }}></div>
        </>
    );
}
