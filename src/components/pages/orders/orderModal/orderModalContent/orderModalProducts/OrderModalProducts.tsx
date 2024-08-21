import { useText } from "@/context/text.context";
import { IOrderModalProductsProps } from "@/types/props/pages.types";
import Image from "next/image";
import Link from "next/link";

export default function OrderModalProducts({
    order,
}: IOrderModalProductsProps) {
    const { text } = useText();

    return (
        <div className="flex flex-col gap-5 max-h-[200px] overflow-y-auto pr-2">
            {order.orderItems.map((item) => {
                return (
                    <div key={order.id} className="flex gap-5">
                        <Link
                            href={`/product/${item.id}-${item.product.slug}`}
                            className="bg-gray2 w-max">
                            <Image
                                src={item.product.img}
                                alt={item.name}
                                width={150}
                                height={150}
                                className="min-w-[120px] min-h-[120px] size-[120px] object-contain object-center"
                            />
                        </Link>
                        <div className="flex flex-col justify-between h-auto grow">
                            <Link
                                className="leading-140 font-semibold hover:text-main"
                                href={`/product/${item.id}-${item.product.slug}`}>
                                {item.name}
                            </Link>

                            <div className="flex items-center justify-between">
                                <p className="text-sm">
                                    Кол-во: {item.quantity}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        {new Intl.NumberFormat("fr-FR").format(
                                            item.price,
                                        )}
                                    </span>{" "}
                                    <span className="text-sm">
                                        {text("сум")}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
