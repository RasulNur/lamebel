import {
    IGetProductAttributesParams,
    IGetProductParams,
    IGetProductsParams,
    IProductAttributes,
    IProducts,
    ISingleProduct,
} from "@/types/api/products.types";

import { fetchGET } from "./fetch";

export const getProducts = async ({
    page = 1,
    quantity = 20,
    order_by = "created_at",
    attributes,
    brands,
    category_id,
    is_bestseller,
    is_discounted,
    is_new,
    is_popular,
    is_promotion,
    is_special,
    order_direction = "asc",
    price_from,
    price_to,
    search,
    locale,
}: IGetProductsParams) => {
    const attrParams = attributes
        ? attributes
              .map((attr) => `&attributes[${attr.attrId}][]=${attr.attrValId}`)
              .join("")
        : "";

    const brandsParams = brands
        ? brands.map((brand) => `&brands[]=${brand}`).join("")
        : "";

    const isParams = `${
        is_bestseller ? `&is_bestseller=${is_bestseller}` : ""
    }${is_discounted ? `&is_discounted=${is_discounted}` : ""}${
        is_new ? `&is_new=${is_new}` : ""
    }${is_popular ? `&is_popular=${is_popular}` : ""}${
        is_promotion ? `&is_promotion=${is_promotion}` : ""
    }${is_special ? `&is_special=${is_special}` : ""}`;

    const priceParams = `${price_from ? `&price_from=${price_from}` : ""}${
        price_to ? `&price_to=${price_to}` : ""
    }`;

    const orderDirParams = order_direction
        ? `&order_direction=${order_direction}`
        : "";

    const orderByParams = order_by ? `&order_by=${order_by}` : "";

    const searchParams = search ? `&search=${search}` : "";

    const categoryParams = category_id ? `&category_id=${category_id}` : "";

    const url = `products?page=${page}&quantity=${quantity}${orderByParams}${categoryParams}${orderDirParams}${priceParams}${searchParams}${isParams}${brandsParams}${attrParams}`;

    return await fetchGET({ url: url, tag: "Products", locale }).then(
        (data: IProducts) => {
            return data;
        },
    );
};

export const getProduct = async ({ locale, productId }: IGetProductParams) => {
    return await fetchGET({
        url: `products/${productId}`,
        tag: "Products",
        locale,
    }).then((data: ISingleProduct) => data);
};

export const getProductAttributes = async ({
    locale,
    productId,
}: IGetProductAttributesParams) => {
    return await fetchGET({
        url: `products/${productId}/attributes`,
        tag: "Products",
        locale,
    }).then((data: IProductAttributes) => data);
};
