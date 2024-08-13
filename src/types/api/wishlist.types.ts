import { Lang } from "./api.types";
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
    lang: Lang;
}

export interface IWishlistRemoveParams {
    token: string;
    body: { product_id: number };
    lang: Lang;
}
export interface IWishlistCreateParams {
    token: string;
    lang: Lang;
    body: {
        products: {
            id: number;
        }[];
    };
}
export interface IGetWishlistParams {
    token?: string;
    lang: Lang;
}
export interface IWishlistClearParams {
    token: string;
    lang: Lang;
}
