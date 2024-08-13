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

export const getCart = async ({ token, lang }: IGetCardParams) => {
    if (token) {
        return await fetchGET({
            url: "cart",
            tag: "Cart",
            token: token,
            lang,
        }).then((data: ICart) => data);
    } else {
        return "Unauthorized";
    }
};

export const cartAdd = async ({ token, body, lang }: ICartAddParams) => {
    return await fetchMutate({
        url: "cart/items/add",
        method: "POST",
        body,
        tag: "Cart",
        token: token,
        lang,
    }).then(async () => {
        const data: ICart | string = await getCart({ token, lang });
        return data;
    });
};

export const cartUpdate = async ({ token, body, lang }: ICartUpdateParams) => {
    return await fetchMutate({
        url: "cart/items/update",
        method: "PUT",
        body,
        tag: "Cart",
        token: token,
        lang,
    }).then(async () => {
        const data: ICart | string = await getCart({ token, lang });
        return data;
    });
};

export const cartRemove = async ({ token, body, lang }: ICartRemoveParams) => {
    return await fetchMutate({
        url: "cart/items/remove",
        method: "DELETE",
        tag: "Cart",
        body,
        token: token,
        lang,
    }).then(async () => {
        const data: ICart | string = await getCart({ token, lang });
        return data;
    });
};

export const cartCreate = async ({ token, body, lang }: ICartCreateParams) => {
    return await fetchMutate({
        url: "cart",
        method: "POST",
        tag: "Cart",
        body,
        token: token,
        lang,
    }).then((data) => {
        return data;
    });
};

export const cartClear = async ({ token, lang }: ICartClearParams) => {
    return await fetchMutate({
        url: "cart/clear",
        method: "POST",
        tag: "Cart",
        token: token,
        lang,
    }).then((data: { message: string }) => {
        return data;
    });
};
