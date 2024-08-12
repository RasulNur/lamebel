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
    params: { id, lang },
}: IPageParamsWithId) {
    const product = await getProduct({
        productId: Number(id.split("-")[0]),
        lang,
    });
    const bestsellerProducts = await getProducts({
        is_bestseller: 1,
        quantity: 10,
        lang,
    });
    const similarProducts = await getProducts({
        quantity: 10,
        lang,
        category_id: product.data.categories[0].id,
        order_by: "price",
        order_direction: "desc",
    });
    const productAttributes = await getProductAttributes({
        productId: product.data.id,
        lang,
    });
    const reviews = await getReviews({ lang, productId: product.data.id });

    const productGroup = await getProductGroup({
        lang,
        productGroupId: product.data.product_group_id,
    });
    return (
        <ProductPageWrapper
            bestsellerProducts={bestsellerProducts.data}
            lang={lang}
            product={product}
            productAttributes={productAttributes}
            productGroup={productGroup}
            reviews={reviews}
            similarProducts={similarProducts.data}
        />
    );
}

export async function generateMetadata({
    params: { id, lang },
}: IPageParamsWithId) {
    const slug = id.split("-").slice(1).join("-");

    const product = await getProduct({
        productId: Number(id.split("-")[0]),
        lang,
    });

    if (!product || product.data.slug !== slug) notFound();

    return {
        title: product.data.seo_title,
        description: product.data.meta_description,
        keywords: product.data.meta_keywords,
    };
}
