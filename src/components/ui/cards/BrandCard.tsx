import { IBrandCardProps } from "@/types/props/ui.types";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function BrandCard({ brand }: IBrandCardProps) {
    return (
        <Link
            href={`/brands/${brand.id}-${brand.slug}`}
            className="group rounded-[20px] w-full h-[140px] flex-center bg-gray2 px-2">
            <Image
                className="opacity-60 group-hover:opacity-100 w-full h-full object-contain transition-300"
                src={`${brand.img}`}
                alt={brand.name}
                title={brand.name}
                width={200}
                height={100}
            />
        </Link>
    );
}
