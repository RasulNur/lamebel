import Link from "next/link";
import Icon from "./Icon";
import Image from "next/image";
import { IProduct } from "@/types/api/products.types";

const colors = [
    { id: 0, color: "#FF53E8" },
    { id: 1, color: "#fff" },
    { id: 2, color: "#FFDD1F" },
];

export default function ProductCard({ product }: { product: IProduct }) {
    return (
        <div className="flex flex-col gap-3 h-full relative">
            <Link
                href={`/product/${product.id}-${product.slug}`}
                className="p-4 flex-center">
                <Image
                    src={product.img}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="md:size-[250px] size-[200px] object-contain object-center"
                />
            </Link>

            <button className="p-2 group absolute right-3 top-3 w-fit">
                <Icon
                    name="heart"
                    className="stroke-primary group-hover:stroke-red size-5"
                />
            </button>

            <div className="flex flex-col gap-4 grow h-full">
                <Link
                    href={`/product/${product.id}-${product.slug}`}
                    className="font-medium leading-150 grow h-full hover:text-main line-clamp-2">
                    {product.name}
                </Link>

                <div className="flex items-center gap-1">
                    {colors.map((el) => {
                        return (
                            <div
                                key={el.id}
                                style={{ backgroundColor: el.color }}
                                className={`border border-placeholder2 size-3 rounded-full`}></div>
                        );
                    })}
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex flex-col gap-1">
                        <div className="font-bold sm:text-lg text-base leading-130">
                            {product.current_price_formatted}
                        </div>
                        {product.old_price_formatted && (
                            <div className="text-[12px] leading-130 line-through opacity-50">
                                {product.old_price_formatted}
                            </div>
                        )}
                    </div>
                    {/* {product.discount_formatted && (
                        <div className="relative">
                            <Icon
                                name="tag"
                                className="w-[56px] h-[24px] stroke-placeholder2 fill-none"
                            />
                            <span className="absolute left-[22px] top-1/2 -translate-y-1/2 text-[12px] font-medium text-placeholder2">
                                {product.discount_formatted}
                            </span>
                        </div>
                    )} */}
                </div>
            </div>

            <button className="main-btn w-full py-[10px]">В корзину</button>
        </div>
    );
}
