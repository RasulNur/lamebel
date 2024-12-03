import { ILinks, ILocalization, IMeta, Locale } from "./api.types";

export interface ICategoriesTree {
    data: ICategoryTree[];
    links: ILinks;
    meta: IMeta;
}
export interface ICategoryTree {
    id: number;
    slug: string;
    parent_id: number | null;
    order: number;
    name: string;
    url: string;
    img: string;
    small_img: string;
    icon: string;
    small_icon: string;
    svg_icon: string;
    description: string;
    children: Omit<
        ICategory,
        "h1_name" | "body" | "seo_title" | "meta_description" | "meta_keywords"
    >[];
    localization: ILocalization;
}

export interface ICategories {
    data: Omit<
        ICategory,
        "h1_name" | "body" | "seo_title" | "meta_description" | "meta_keywords"
    >[];
}

export interface ICategory {
    id: number;
    slug: string;
    parent_id: number | null;
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

    h1_name: string;
    body: string;
    seo_title: string;
    meta_description: string;
    meta_keywords: string;
}

export interface ISingleCategory {
    data: ICategory;
}

export interface ICategoryAttributes {
    data: ICategoryAttribute[];
}

export interface ICategoryAttribute {
    id: number;
    slug: string;
    name: string;
    used_for_filter: 0 | 1;
    attribute_values: IAttrValue[];
}

interface IAttrValue {
    id: number;
    slug: string;
    name: string;
    used_for_filter: 0 | 1;
}

export interface ICategoryBrands {
    data: ICategoryBrand[];
}

export interface ICategoryBrand {
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

export interface IPrices {
    min: number;
    max: number;
}

export interface IGetCategoryParams {
    categoryId: number;
    locale: Locale;
}
export interface IGetParentCategoryParams {
    categoryId: number;
    locale: Locale;
}
export interface IGetSubCategoriesParams {
    categoryId: number;
    locale: Locale;
}
export interface IGetCategoryBrandsParams {
    categoryId: number;
    locale: Locale;
}
export interface IGetCategoryAttributesParams {
    categoryId: number;
    locale: Locale;
}
export interface IGetCategoryPricesParams {
    categoryId: number;
    locale: Locale;
}
