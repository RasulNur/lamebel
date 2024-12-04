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
import { Locale } from "@/types/api/api.types";

export const getCategoriesTree = async ({ locale }: { locale: Locale }) => {
    return await fetchGET({
        url: "categories/tree",
        tag: "Categories",
        locale,
    }).then((data: ICategoriesTree) => data);
};

export const getCategory = async ({ categoryId, locale }: IGetCategoryParams) => {
    return await fetchGET({
        url: `categories/${categoryId}`,
        tag: "Categories",
        locale,
    }).then((data: ISingleCategory) => data);
};

export const getParentCategory = async ({ categoryId, locale }: IGetParentCategoryParams) => {
    return await fetchGET({
        url: `categories/${categoryId}`,
        tag: "Categories",
        locale,
    }).then(async (data: ISingleCategory) => {
        if (data.data.parent_id) {
            return await fetchGET({
                url: `categories/${data.data.parent_id}`,
                tag: "Categories",
                locale,
            }).then((data: ISingleCategory) => {
                return data;
            });
        } else {
            return "Not exist";
        }
    });
};

export const getSubCategories = async ({ categoryId, locale }: IGetSubCategoriesParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/subcategories`,
        tag: "Categories",
        locale,
    }).then((data: ICategories) => data);
};

export const getCategoryBrands = async ({ categoryId, locale }: IGetCategoryBrandsParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/brands`,
        tag: "Categories",
        locale,
    }).then((data: ICategoryBrands) => data);
};

export const getCategoryAttributes = async ({ categoryId, locale }: IGetCategoryAttributesParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/attributes&only_filter=1`,
        tag: "Categories",
        locale,
    }).then((data: ICategoryAttributes) => data);
};

export const getCategoryPrices = async ({ categoryId, locale }: IGetCategoryPricesParams) => {
    return await fetchGET({
        url: `categories/${categoryId}/prices`,
        tag: "Categories",
        locale,
    }).then((data: IPrices) => data);
};
