import { Locale } from "./api.types";
import { IProduct } from "./products.types";

export interface IWishlist {
    quantity: number;
    items: {
        id: number;
        name: string;
        product: IProduct;
    }[];
}
// export type WishlistProduct = Omit<IProduct, "categories" | "stickers">;

export interface IWishlistAddParams {
    token: string;
    body: { product_id: number };
    locale: Locale;
}

export interface IWishlistRemoveParams {
    token: string;
    body: { product_id: number };
    locale: Locale;
}
export interface IWishlistCreateParams {
    token: string;
    locale: Locale;
    body: {
        products: {
            id: number;
        }[];
    };
}
export interface IGetWishlistParams {
    token?: string;
    locale: Locale;
}
export interface IWishlistClearParams {
    token: string;
    locale: Locale;
}
