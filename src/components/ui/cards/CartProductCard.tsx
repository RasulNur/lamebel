import Image from "next/image";
import Link from "next/link";
import Quantity from "../formElements/Quantity";
import WishlistButton from "../buttons/WishlistButton";
import RemoveFromCart from "../../pages/cart/removeFromCart/RemoveFromCart";
import { ICartProductCardProps } from "@/types/props.types";

const colors = [
    { id: 0, color: "#FF53E8" },
    { id: 1, color: "#fff" },
    { id: 2, color: "#FFDD1F" },
];

export default function CartProductCard({
    product,
    quantity,
}: ICartProductCardProps) {
    return (
        <div className="flex gap-5 min-[500px]:flex-row flex-col">
            <Link
                href={`/product/${product.id}-${product.slug}`}
                className="p-4 flex-center bg-gray2">
                <Image
                    src={product.img}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="xl:min-w-[200px] xl:min-h-[200px] md:min-w-[150px] md:min-h-[150px] min-w-[120px] min-h-[120px] object-contain object-center"
                />
            </Link>

            <div className="flex sm:flex-row flex-col justify-between sm:gap-10 gap-5 w-full">
                <div className="flex flex-col gap-2">
                    <Link
                        href={`/product/${product.id}-${product.slug}`}
                        className="font-medium leading-150 hover:text-main line-clamp-2">
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
                </div>

                <div className="flex flex-col sm:items-end gap-7">
                    <div className="flex flex-col sm:items-end gap-1 whitespace-nowrap">
                        <div className="font-bold sm:text-xl text-lg leading-130">
                            {product.current_price_formatted}
                        </div>
                        {product.old_price_formatted && (
                            <div className="text-sm leading-130 line-through opacity-50">
                                {product.old_price_formatted}
                            </div>
                        )}
                    </div>
                    <div className="flex sm:flex-col flex-row items-end gap-7 w-full justify-between">
                        {quantity && (
                            <Quantity
                                productQuantity={quantity}
                                product={product}
                            />
                        )}
                        <div className="flex items-center gap-4">
                            <WishlistButton product={product} />
                            <RemoveFromCart product={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
