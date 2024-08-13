import Link from "next/link";
import Image from "next/image";
import { INewsCardProps } from "@/types/props.types";

export default function NewsCard({ singleNews }: INewsCardProps) {
    return (
        <div className="flex flex-col gap-4 h-full grow">
            <Link href={`/news/${singleNews.id}-${singleNews.slug}`}>
                <Image
                    src={singleNews.img}
                    alt=""
                    width={480}
                    height={480}
                    className="w-full 2xl:h-[480px] xl:h-[400px] sm:h-[300px] h-[250px] object-cover object-center"
                />
            </Link>
            <div className="flex flex-col gap-4 h-full">
                <Link
                    href={`/news/${singleNews.id}-${singleNews.slug}`}
                    className="text-xl leading-130 font-semibold line-clamp-2 hover:text-main h-[52px]">
                    {singleNews.name}
                </Link>

                <p className="font-medium leading-140 text-secondary line-clamp-3">
                    {singleNews.description}
                </p>
            </div>
        </div>
    );
}