import {
    IGetProductGroupParams,
    IProductGroup,
} from "@/types/api/productGroup.types";

import { fetchGET } from "./fetch";

export const getProductGroup = async ({
    locale,
    productGroupId,
}: IGetProductGroupParams) => {
    if (productGroupId) {
        return await fetchGET({
            url: `product-groups/${productGroupId}`,
            tag: "ProductGroup",
            locale,
        }).then((data: IProductGroup) => data);
    } else {
        return "Not exist";
    }
};
