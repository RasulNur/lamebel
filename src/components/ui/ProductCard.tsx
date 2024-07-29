import Link from "next/link";
import Icon from "./Icon";
import Image from "next/image";
import { IProduct } from "./ProductsSwiper";

const colors = [
    { id: 0, color: "#FF53E8" },
    { id: 1, color: "#fff" },
    { id: 2, color: "#FFDD1F" },
];

export default function ProductCard({ product }: { product: IProduct }) {
    return (
        <div className="flex flex-col gap-3 h-full">
            <Link href="/" className="p-4 flex-center">
                <Image
                    src={product.img}
                    alt={product.title}
                    width={250}
                    height={250}
                    className="md:size-[250px] size-[200px] object-contain object-center"
                />
            </Link>
            <div className="flex flex-col gap-4 grow h-full">
                <Link
                    href="/"
                    className="font-medium leading-150 grow h-full hover:text-main line-clamp-2">
                    {product.title}
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
                    <div className="flex xl:flex-row flex-col xl:items-center xl:gap-2 gap-1">
                        <div className="font-bold sm:text-lg text-base leading-130">
                            2.500.000 сум
                        </div>
                        <div className="text-[12px] leading-130 line-through opacity-50">
                            5.000.000 сум
                        </div>
                    </div>
                    <div className="relative">
                        <Icon
                            name="tag"
                            className="w-[56px] h-[24px] stroke-placeholder2"
                        />
                        <span className="absolute left-[22px] top-1/2 -translate-y-1/2 text-[12px] font-medium text-placeholder2">
                            -15%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
