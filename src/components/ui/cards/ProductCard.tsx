import Link from "next/link";
import Image from "next/image";
import WishlistButton from "../buttons/WishlistButton";
import CartButton from "../buttons/CartButton";
import ProductDiscount from "../ProductDiscount";
import BuyModal from "../headless/buyModal/BuyModal";
import { IProductCardProps } from "@/types/props/ui.types";

const colors = [
    { id: 0, color: "#FF53E8" },
    { id: 1, color: "#fff" },
    { id: 2, color: "#FFDD1F" },
];

export default function ProductCard({ product, lang }: IProductCardProps) {
    return (
        <div className="flex flex-col gap-3 h-full relative max-w-[358px]">
            <Link
                href={`/product/${product.id}-${product.slug}`}
                className="p-4 flex-center bg-white">
                <Image
                    src={product.img}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="md:size-[250px] size-[200px] object-contain object-center"
                />
            </Link>
            <WishlistButton
                product={product}
                className="absolute right-3 top-3"
            />

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
                    <ProductDiscount product={product} />
                </div>
            </div>
            <div className="flex items-center gap-2 pb-[2px]">
                <CartButton product={product} type="icon" />
                <BuyModal
                    product={product}
                    lang={lang}
                    className="w-full grow"
                />
            </div>
        </div>
    );
}
