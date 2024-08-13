import {
    IGetWishlistParams,
    IWishlist,
    IWishlistAddParams,
    IWishlistClearParams,
    IWishlistCreateParams,
    IWishlistRemoveParams,
} from "@/types/api/wishlist.types";

import { fetchGET, fetchMutate } from "./fetch";

export const getWishlist = async ({ token, lang }: IGetWishlistParams) => {
    if (token) {
        return await fetchGET({
            url: "wishlist",
            tag: "Wishlist",
            token,
            lang,
        }).then((data: IWishlist) => data);
    } else {
        return "Unauthorized";
    }
};

export const wishlistAdd = async ({
    token,
    body,
    lang,
}: IWishlistAddParams) => {
    return await fetchMutate({
        url: "wishlist/items/add",
        method: "POST",
        body,
        tag: "Wishlist",
        token,
        lang,
    }).then(async () => {
        const data: IWishlist | string = await getWishlist({ token, lang });
        return data;
    });
};

export const wishlistRemove = async ({
    token,
    body,
    lang,
}: IWishlistRemoveParams) => {
    return await fetchMutate({
        url: "wishlist/items/remove",
        method: "DELETE",
        tag: "Wishlist",
        body,
        token,
        lang,
    }).then(async () => {
        const data: IWishlist | string = await getWishlist({ token, lang });
        return data;
    });
};

export const wishlistCreate = async ({
    token,
    body,
    lang,
}: IWishlistCreateParams) => {
    return await fetchMutate({
        url: "wishlist",
        method: "POST",
        tag: "Wishlist",
        body,
        token,
        lang,
    }).then((data) => {
        return data;
    });
};

export const wishlistClear = async ({ token, lang }: IWishlistClearParams) => {
    return await fetchMutate({
        url: "wishlist/clear",
        method: "POST",
        tag: "Wishlist",
        token,
        lang,
    }).then((data: { message: string }) => {
        return data;
    });
};
