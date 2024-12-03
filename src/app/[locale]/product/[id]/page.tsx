import {
    getProduct,
    getProductAttributes,
    getProducts,
} from "@/api/productsApi";
import { notFound } from "next/navigation";
import { getReviews } from "@/api/reviewsApi";
import { getProductGroup } from "@/api/productGroupApi";
import { IPageParamsWithId } from "@/types/pageParams.types";
import ProductPageWrapper from "@/components/pages/product/ProductPageWrapper";

export default async function ProductPage({
    params: { id, locale },
}: IPageParamsWithId) {
    const product = await getProduct({
        productId: Number(id.split("-")[0]),
        locale,
    });
    const bestsellerProducts = await getProducts({
        is_bestseller: 1,
        quantity: 10,
        locale,
    });
    const similarProducts = await getProducts({
        quantity: 10,
        locale,
        category_id: product.data.categories[0].id,
        order_by: "price",
        order_direction: "desc",
    });
    const productAttributes = await getProductAttributes({
        productId: product.data.id,
        locale,
    });
    const reviews = await getReviews({ locale, productId: product.data.id });

    const productGroup = await getProductGroup({
        locale,
        productGroupId: product.data.product_group_id,
    });
    return (
        <ProductPageWrapper
            bestsellerProducts={bestsellerProducts.data}
            locale={locale}
            product={product}
            productAttributes={productAttributes}
            productGroup={productGroup}
            reviews={reviews}
            similarProducts={similarProducts.data}
        />
    );
}

export async function generateMetadata({
    params: { id, locale },
}: IPageParamsWithId) {
    const slug = id.split("-").slice(1).join("-");

    const product = await getProduct({
        productId: Number(id.split("-")[0]),
        locale,
    });

    if (!product || product.data.slug !== slug) notFound();

    return {
        title: product.data.seo_title,
        description: product.data.meta_description,
        keywords: product.data.meta_keywords,
    };
}
