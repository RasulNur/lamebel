import Image from "next/image";
import Link from "next/link";
import { ICategoryTree } from "@/types/api/categories.types";

export default function CategoryCard({
    category,
}: {
    category: ICategoryTree;
}) {
    return (
        <Link
            href={`/categories/${category.id}-${category.slug}`}
            className="flex flex-col items-center text-center gap-3 group">
            <div className="py-4">
                <Image
                    src={category.img}
                    alt={category.name}
                    width={150}
                    height={150}
                    className="object-contain object-center w-[150px] h-[150px]"
                />
            </div>

            <h4 className="font-medium group-hover:text-main transition-300">
                {category.name}
            </h4>
        </Link>
    );
}
