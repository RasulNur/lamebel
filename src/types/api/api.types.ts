export interface ILocalization {
    ru: {
        slug: string;
    };
    uz: {
        slug: string;
    };
}

export interface IGallery {
    original: string;
    micro: string;
    small: string;
    medium: string;
}

export interface ILinks {
    first: string;
    last: string;
    prev: string;
    next: string;
}

export interface IMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: IMetaLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}
interface IMetaLink {
    url: string;
    label: string;
    active: boolean;
}
export interface IFetchMutateParams {
    url: string;
    body?: any;
    tag: Tag;
    locale: Locale;
    method: Method;
    token?: string;
    contentType?: "multipart/form-data" | "application/json";
}
export interface IFetchGetParams {
    url: string;
    tag: Tag;
    locale: Locale;
    token?: string;
}
export interface IMeta {
    current_page: number;
    from: number;
    last_page: number;
    links: IMetaLink[];
    path: string;
    per_page: number;
    to: number;
    total: number;
}

interface IMetaLink {
    url: string;
    label: string;
    active: boolean;
}

// export type Locale = "ru" | "uz" | "en";
export type Locale = "ru" | "uz";

export type Tag =
    | "Auth"
    | "Products"
    | "Texts"
    | "Categories"
    | "Feedback"
    | "Settings"
    | "Addresses"
    | "Publications"
    | "Profile"
    | "Brands"
    | "Cart"
    | "Wishlist"
    | "Shipping"
    | "Payment"
    | "Menus"
    | "Promotions"
    | "ProductGroup"
    | "Banners"
    | "Reviews"
    | "Pages"
    | "Orders";
export type Method = "POST" | "PUT" | "DELETE";
