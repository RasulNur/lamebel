import {
    IGetProductGroupParams,
    IProductGroup,
} from "@/types/api/productGroup.types";

import { fetchGET } from "./fetch";

export const getProductGroup = async ({
    lang,
    productGroupId,
}: IGetProductGroupParams) => {
    if (productGroupId) {
        return await fetchGET({
            url: `product-groups/${productGroupId}`,
            tag: "ProductGroup",
            lang,
        }).then((data: IProductGroup) => data);
    } else {
        return "Not exist";
    }
};
