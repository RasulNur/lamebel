import {
    IPaymentMethods,
    IShippingMethods,
} from "@/types/api/checkoutMethods.types";

import { fetchGET } from "./fetch";
import { Locale } from "@/types/api/api.types";

export const getShippingMethods = async ({ locale }: { locale: Locale }) => {
    return await fetchGET({
        url: `shipping-methods`,
        tag: "Shipping",
        locale,
    }).then((data: IShippingMethods) => data);
};
export const getPaymentMethods = async ({ locale }: { locale: Locale }) => {
    return await fetchGET({
        url: `payment-methods`,
        tag: "Payment",
        locale,
    }).then((data: IPaymentMethods) => data);
};
