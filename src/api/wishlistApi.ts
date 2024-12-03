import {
    IGetWishlistParams,
    IWishlist,
    IWishlistAddParams,
    IWishlistClearParams,
    IWishlistCreateParams,
    IWishlistRemoveParams,
} from "@/types/api/wishlist.types";

import { fetchGET, fetchMutate } from "./fetch";

export const getWishlist = async ({ token, locale }: IGetWishlistParams) => {
    if (token) {
        return await fetchGET({
            url: "wishlist",
            tag: "Wishlist",
            token,
            locale,
        }).then((data: IWishlist) => data);
    } else {
        return "Unauthorized";
    }
};

export const wishlistAdd = async ({
    token,
    body,
    locale,
}: IWishlistAddParams) => {
    return await fetchMutate({
        url: "wishlist/items/add",
        method: "POST",
        body,
        tag: "Wishlist",
        token,
        locale,
    }).then(async () => {
        const data: IWishlist | string = await getWishlist({ token, locale });
        return data;
    });
};

export const wishlistRemove = async ({
    token,
    body,
    locale,
}: IWishlistRemoveParams) => {
    return await fetchMutate({
        url: "wishlist/items/remove",
        method: "DELETE",
        tag: "Wishlist",
        body,
        token,
        locale,
    }).then(async () => {
        const data: IWishlist | string = await getWishlist({ token, locale });
        return data;
    });
};

export const wishlistCreate = async ({
    token,
    body,
    locale,
}: IWishlistCreateParams) => {
    return await fetchMutate({
        url: "wishlist",
        method: "POST",
        tag: "Wishlist",
        body,
        token,
        locale,
    }).then((data) => {
        return data;
    });
};

export const wishlistClear = async ({
    token,
    locale,
}: IWishlistClearParams) => {
    return await fetchMutate({
        url: "wishlist/clear",
        method: "POST",
        tag: "Wishlist",
        token,
        locale,
    }).then((data: { message: string }) => {
        return data;
    });
};
