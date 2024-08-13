import { IGallery, ILinks, ILocalization, IMeta, Lang } from "./api.types";

export interface IProducts {
    data: IProduct[];
    links: ILinks;
    meta: IMeta;
}

export interface IProduct {
    id: number;
    slug: string;
    product_group_id: number | null;
    name: string;
    url: string;
    sku: string;
    barcode: null;
    ikpu: null;
    package_code: number;
    units: number;
    brand_id: number;
    img: string;
    micro_img: string;
    small_img: string;
    medium_img: string;
    gallery: IGallery[];
    current_price: number;
    current_price_formatted: string;
    old_price: number;
    old_price_formatted: string;
    installment_prices: [];
    discount: string;
    discount_formatted: string;
    in_stock: number;
    is_special: 0 | 1;
    is_bestseller: 0 | 1;
    is_new: 0 | 1;
    is_promotion: 0 | 1;
    is_popular: 0 | 1;
    rating: number;
    rating_count: number;
    number_of_sales: number;
    description: string;
    views: number;
    categories: IProductCategory[];
    stickers: [];
    brand: IProductBrand;
    brand_name: string;
    is_book: boolean;
    localization: ILocalization;
    wholesale_price: string;
    wholesale_price_formatted: string;
}
export type ProductsFilter =
    | "is_special"
    | "is_bestseller"
    | "is_new"
    | "is_promotion"
    | "is_discounted"
    | "is_popular";

interface IProductCategory {
    id: number;
    slug: string;
    parent_id: number;
    order: number;
    name: string;
    url: string;
    img: string;
    small_img: string;
    icon: string;
    small_icon: string;
    svg_icon: string;
    description: string;
    localization: ILocalization;
}

export interface IProductBrand {
    id: number;
    slug: string;
    order: number;
    name: string;
    url: string;
    img: string;
    small_img: string;
    description: string;
    bg: string;
    accent_color: string;
    localization: ILocalization;
}

export type OrderBy = "created_at" | "price" | "views" | "rating" | "discount";

export interface IGetProductsParams {
    page?: number;
    quantity?: number;
    order_by?: OrderBy;
    order_direction?: "asc" | "desc";
    category_id?: number;
    price_from?: number | null;
    price_to?: number | null;
    is_new?: 0 | 1 | null;
    is_special?: 0 | 1 | null;
    is_bestseller?: 0 | 1 | null;
    is_promotion?: 0 | 1 | null;
    is_popular?: 0 | 1 | null;
    is_discounted?: 0 | 1 | null;
    search?: string;
    brands?: number[] | null;
    attributes?:
        | {
              attrId: number;
              attrValId: number;
          }[]
        | null;
    lang: Lang;
}

export interface ISingleProduct {
    data: IProduct & {
        h1_name: string;
        body: string;
        seo_title: string;
        meta_description: string;
        meta_keywords: string;
        book: string;
    };
}

export interface IProductAttributes {
    data: IProductAttribute[];
}

export interface IProductAttribute {
    id: number;
    slug: string;
    name: string;
    used_for_filter: 0 | 1;
    attribute_values: IProdcutAttributeValue[];
}

export interface IProdcutAttributeValue {
    id: number;
    slug: string;
    name: string;
    used_for_filter: 0 | 1;
}

export interface IGetProductParams {
    productId: number;
    lang: Lang;
}
export interface IGetProductAttributesParams {
    productId: number;
    lang: Lang;
}
