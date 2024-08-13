import {
    ICreateOrderParams,
    IGetOrderParams,
    IGetOrdersParams,
    IOrders,
} from "@/types/api/orders.types";
import { ICreateOrderRes, ISingleOrder } from "@/types/api/orders.types";

import { fetchGET, fetchMutate } from "./fetch";

export const getOrders = async ({
    token,
    page = 1,
    quantity = 20,
    lang,
}: IGetOrdersParams) => {
    if (token) {
        return await fetchGET({
            url: `orders?page=${page}&quantity=${quantity}`,
            tag: "Orders",
            token,
            lang,
        }).then((data: IOrders) => data);
    } else {
        return "Unauthorized";
    }
};

export const createOrder = async ({
    token,
    body,
    lang,
}: ICreateOrderParams) => {
    return await fetchMutate({
        url: "orders",
        method: "POST",
        body,
        tag: "Orders",
        token,
        lang,
    }).then((data: ICreateOrderRes) => {
        return data;
    });
};

export const getOrder = async ({ token, orderId, lang }: IGetOrderParams) => {
    if (token) {
        return await fetchGET({
            url: `orders/${orderId}`,
            tag: "Orders",
            token: token,
            lang,
        }).then((data: ISingleOrder) => data);
    } else {
        return "Unauthorized";
    }
};
