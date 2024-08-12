"use client";

import CartButton from "@/components/ui/buttons/CartButton";
import WishlistButton from "@/components/ui/buttons/WishlistButton";
import ProductLinks from "./productLinks/ProductLinks";
import ProductDiscount from "@/components/ui/ProductDiscount";
import ProductGroups from "./productGroups/ProductGroups";
import { IProductSidebarProps } from "@/types/props.types";
import useHeaderSize from "@/hooks/useHeaderSize";
import ProductSticker from "@/components/ui/ProductSticker";

export default function ProductSidebar({
    product,
    setTabIndex,
    attributes,
    productGroup,
}: IProductSidebarProps) {
    const { height } = useHeaderSize();

    return (
        <div
            className="sticky flex flex-col lg:gap-8 gap-6 h-max bg-white transition-300"
            style={{ top: `${height + 20}px` }}>
            <div className="flex items-center justify-between">
                <ProductSticker />
                <WishlistButton product={product} />
            </div>

            <h3 className="text-xl leading-140 font-semibold">
                {product.name}
            </h3>

            <div className="flex items-center gap-2 justify-between">
                <div className="flex flex-col gap-1">
                    <div className="font-bold sm:text-xl text-lg leading-130">
                        {product.current_price_formatted}
                    </div>
                    {product.old_price_formatted && (
                        <div className="text-sm leading-130 line-through opacity-50">
                            {product.old_price_formatted}
                        </div>
                    )}
                </div>
                <ProductDiscount product={product} type="product" />
            </div>
            {product.product_group_id && (
                <ProductGroups
                    attributes={attributes}
                    productGroup={productGroup}
                />
            )}

            <CartButton product={product} className="!py-4 w-full" />

            <ProductLinks setTabIndex={setTabIndex} />
        </div>
    );
}
