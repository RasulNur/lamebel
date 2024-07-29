import Image from "next/image";
import Link from "next/link";
import { ICategory } from "./CategoriesSwiper";

export default function CategoryCard({ category }: { category: ICategory }) {
    return (
        <Link
            href="/"
            className="flex flex-col items-center text-center gap-3 group">
            <div className="py-4">
                <Image
                    src={category.img}
                    alt={category.title}
                    width={150}
                    height={150}
                    className="object-contain object-center w-[150px] h-[150px]"
                />
            </div>

            <h4 className="font-medium group-hover:text-main transition-300">
                {category.title}
            </h4>
        </Link>
    );
}
