import {
    ICart,
    ICartAddParams,
    ICartClearParams,
    ICartCreateParams,
    ICartRemoveParams,
    ICartUpdateParams,
    IGetCardParams,
} from "@/types/api/cart.types";

import { fetchGET, fetchMutate } from "./fetch";

export const getCart = async ({ token, locale }: IGetCardParams) => {
    if (token) {
        return await fetchGET({
            url: "cart",
            tag: "Cart",
            token: token,
            locale,
        }).then((data: ICart) => data);
    } else {
        return "Unauthorized";
    }
};

export const cartAdd = async ({ token, body, locale }: ICartAddParams) => {
    return await fetchMutate({
        url: "cart/items/add",
        method: "POST",
        body,
        tag: "Cart",
        token: token,
        locale,
    }).then(async () => {
        const data: ICart | string = await getCart({ token, locale });
        return data;
    });
};

export const cartUpdate = async ({
    token,
    body,
    locale,
}: ICartUpdateParams) => {
    return await fetchMutate({
        url: "cart/items/update",
        method: "PUT",
        body,
        tag: "Cart",
        token: token,
        locale,
    }).then(async () => {
        const data: ICart | string = await getCart({ token, locale });
        return data;
    });
};

export const cartRemove = async ({
    token,
    body,
    locale,
}: ICartRemoveParams) => {
    return await fetchMutate({
        url: "cart/items/remove",
        method: "DELETE",
        tag: "Cart",
        body,
        token: token,
        locale,
    }).then(async () => {
        const data: ICart | string = await getCart({ token, locale });
        return data;
    });
};

export const cartCreate = async ({
    token,
    body,
    locale,
}: ICartCreateParams) => {
    return await fetchMutate({
        url: "cart",
        method: "POST",
        tag: "Cart",
        body,
        token: token,
        locale,
    }).then((data) => {
        return data;
    });
};

export const cartClear = async ({ token, locale }: ICartClearParams) => {
    return await fetchMutate({
        url: "cart/clear",
        method: "POST",
        tag: "Cart",
        token: token,
        locale,
    }).then((data: { message: string }) => {
        return data;
    });
};
