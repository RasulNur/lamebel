import CartButton from "@/components/ui/CartButton";
import WishlistButton from "@/components/ui/WishlistButton";
import { IProductAttributes, ISingleProduct } from "@/types/api/products.types";
import ProductLinks from "./productLinks/ProductLinks";
import { SetState } from "@/types/types";
import ProductDiscount from "@/components/ui/ProductDiscount";
import ProductGroups from "./productGroups/ProductGroups";
import { Lang } from "@/types/api/api.types";
import { IProductGroup } from "@/types/api/productGroup.types";

export default function ProductSidebar({
    product,
    setTabIndex,
    attributes,
    productGroup,
}: {
    product: ISingleProduct;
    setTabIndex: SetState<number>;
    attributes: IProductAttributes;
    productGroup: IProductGroup | "Not exist";
}) {
    const colors = [
        { id: 0, color: "#FF53E8" },
        { id: 1, color: "#fff" },
        { id: 2, color: "#FFDD1F" },
    ];
    const {
        h1_name,
        body,
        seo_title,
        meta_description,
        meta_keywords,
        book,
        ...productItem
    } = product.data;

    return (
        <div className="sticky top-[170px] lg:p-6 p-0 flex flex-col lg:gap-8 gap-6 lg:border border-gray5 h-max bg-white">
            <div className="flex items-center justify-between">
                <div></div>
                <WishlistButton product={productItem} />
            </div>

            <h3 className="text-xl leading-140 font-semibold">
                {product.data.name}
            </h3>

            <div className="flex items-center gap-2 justify-between">
                <div className="flex flex-col gap-1">
                    <div className="font-bold sm:text-xl text-lg leading-130">
                        {product.data.current_price_formatted}
                    </div>
                    {product.data.old_price_formatted && (
                        <div className="text-sm leading-130 line-through opacity-50">
                            {product.data.old_price_formatted}
                        </div>
                    )}
                </div>
                <ProductDiscount product={productItem} type="product" />
            </div>
            {product.data.product_group_id && (
                <ProductGroups
                    attributes={attributes}
                    productGroup={productGroup}
                />
            )}

            {/* <div className="flex items-center gap-1">
                {colors.map((el) => {
                    return (
                        <div
                            key={el.id}
                            style={{ backgroundColor: el.color }}
                            className={`border border-placeholder2 size-8 rounded-full`}></div>
                    );
                })}
            </div> */}

            <CartButton product={productItem} className="!py-4 w-full" />

            <ProductLinks setTabIndex={setTabIndex} />
        </div>
    );
}
