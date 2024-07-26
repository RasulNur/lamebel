import {
    ICategories,
    ICategoriesTree,
    ICategoryAttributes,
    ICategoryBrands,
    IGetCategoryAttributesParams,
    IGetCategoryBrandsParams,
    IGetCategoryParams,
    IGetCategoryPricesParams,
    IGetParentCategoryParams,
    IGetSubCategoriesParams,
    IPrices,
    ISingleCategory,
} from "@/types/api/categories.types";

import { fetchGET } from "./fetch";
import { Lang } from "@/types/api/api.types";

export const getCategoriesTree = async ({ lang }: { lang: Lang }) => {
    return await fetchGET({
        url: "categories/tree",
        tag: "Categories",
        lang,
    }).then((data: ICategoriesTree) => data);
};

export const getCategory = async ({ categoryId, lang }: IGetCategoryParams) => {
    return await fetchGET({
        url: `categories/${categoryId}`,
        tag: "Categories",
        lang,
    }).then((data: ISingleCategory) => data);
};

export const getParentCategory = async ({
    categoryId,
    lang,
}: IGetParentCategoryParams) => {
    return await fetchGET({
        url: `categories/${categoryId}`,
        tag: "Categories",
        lang,
    }).then(async (data: ISingleCategory) => {
        if (data.data.parent_id) {
            return await fetchGET({
                url: `categories/${data.data.parent_id}`,
                tag: "Categories",
                lang,
            }).then((data: ISingleCategory) => {
                return data;
            });
        } else {
            return "Not exist";
        }
    });
};

export const getSubCategories = async ({
    categoryId,
    lang,
}: IGetSubCategoriesParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/subcategories`,
        tag: "Categories",
        lang,
    }).then((data: ICategories) => data);
};

export const getCategoryBrands = async ({
    categoryId,
    lang,
}: IGetCategoryBrandsParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/brands`,
        tag: "Categories",
        lang,
    }).then((data: ICategoryBrands) => data);
};

export const getCategoryAttributes = async ({
    categoryId,
    lang,
}: IGetCategoryAttributesParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/attributes`,
        tag: "Categories",
        lang,
    }).then((data: ICategoryAttributes) => data);
};

export const getCategoryPrices = async ({
    categoryId,
    lang,
}: IGetCategoryPricesParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/prices`,
        tag: "Categories",
        lang,
    }).then((data: IPrices) => data);
};
