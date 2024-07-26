import {
    IPaymentMethods,
    IShippingMethods,
} from "@/types/api/checkoutMethods.types";

import { fetchGET } from "./fetch";
import { Lang } from "@/types/api/api.types";

export const getShippingMethods = async ({ lang }: { lang: Lang }) => {
    return await fetchGET({
        url: `shipping-methods`,
        tag: "Shipping",
        lang,
    }).then((data: IShippingMethods) => data);
};
export const getPaymentMethods = async ({ lang }: { lang: Lang }) => {
    return await fetchGET({
        url: `payment-methods`,
        tag: "Payment",
        lang,
    }).then((data: IPaymentMethods) => data);
};
