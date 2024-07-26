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
    lang,
}: IGetProductsParams) => {
    const params = `products?page=${page}&quantity=${quantity}&order_by=${order_by}${
        category_id ? `&category_id=${category_id}` : ""
    }&order_direction=${order_direction}${
        price_from ? `&price_from=${price_from}` : ""
    }${price_to ? `&price_to=${price_to}` : ""}${
        search ? `&search=${search}` : ""
    }${is_bestseller ? `&is_bestseller=${is_bestseller}` : ""}${
        is_discounted ? `&is_discounted=${is_discounted}` : ""
    }${is_new ? `&is_new=${is_new}` : ""}${
        is_popular ? `&is_popular=${is_popular}` : ""
    }${is_promotion ? `&is_promotion=${is_promotion}` : ""}${
        is_special ? `&is_special=${is_special}` : ""
    }${brands ? brands.map((brand) => `&brands[]=${brand}`).join("") : ""}${
        attributes
            ? attributes
                  .map(
                      (attr) =>
                          `&attributes[${attr.attrId}][]=${attr.attrValId}`,
                  )
                  .join("")
            : ""
    }`;

    return await fetchGET({ url: params, tag: "Products", lang }).then(
        (data: IProducts) => {
            return data;
        },
    );
};

export const getProduct = async ({ lang, productId }: IGetProductParams) => {
    return await fetchGET({
        url: `products/${productId}`,
        tag: "Products",
        lang,
    }).then((data: ISingleProduct) => data);
};

export const getProductAttributes = async ({
    lang,
    productId,
}: IGetProductAttributesParams) => {
    return await fetchGET({
        url: `products/${productId}/attributes`,
        tag: "Products",
        lang,
    }).then((data: IProductAttributes) => data);
};
