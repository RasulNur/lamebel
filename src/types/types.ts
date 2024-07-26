import { FormikState } from "formik";
import { Dispatch, SetStateAction } from "react";
import { Lang } from "./api/api.types";

export type SpritesName =
    | "phone"
    | "facebook"
    | "instagram"
    | "telegram"
    | "youtube"
    | "location"
    | "x"
    | "menu"
    | "search"
    | "globe"
    | "heart"
    | "cart"
    | "chevron"
    | "file-check"
    | "headset"
    | "lightning"
    | "truck"
    | "mail"
    | "call"
    | "location-trans"
    | "telegram-trans"
    | "exit"
    | "eye"
    | "eye-off"
    | "trash"
    | "minus"
    | "plus"
    | "clock"
    | "cart-success"
    | "location-circle"
    | "filter"
    | "x-2"
    | "sort-up"
    | "sort-down"
    | "bag"
    | "user";

export type DashboardRoutes = "orders" | "profile" | "wishlist" | "addresses";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export interface ILatLng {
    lat: number;
    lng: number;
}

export interface ISubmitFormFuncParams<FormValues> {
    values: FormValues;
    resetForm: (
        nextState?: Partial<FormikState<FormValues>> | undefined,
    ) => void;
}

export type FulfillAfterOtpType = ({ otp }: { otp: string }) => void;

export type SortDirectionType = "asc" | "desc";

export type OrderBy = "created_at" | "price" | "views" | "rating" | "discount";

export interface ISort {
    name: string;
    value: OrderBy;
}
export interface ISortBtn {
    id: number;
    sortOption: OrderBy;
    title: string;
}

export type PaymentMethodType = "cash" | "card" | "installment" | "alifnasiya";
export type ShippingMethodType = "free" | "pickup";

export interface IContactsCard {
    id: number;
    title: string;
    description: string;
    iconName: SpritesName;
    href: string;
    linkTitle: string;
}

export interface IDashboardTab {
    id: number;
    title: string;
    iconName: SpritesName;
    route: DashboardRoutes;
    iconClassname?: string;
}

export interface IStore {
    id: number;
    iconName: SpritesName;
    status: "success" | "fail" | "pending";
}

export type GalleryPosition = "bottom" | "left" | "top" | "right" | undefined;

export interface IUseLimitParams {
    data: any[];
    limitNumber: number;
}

export interface ILangOption {
    id: number;
    lang: Lang;
    label: string;
    labelMobile: string;
}

export type InputNames =
    | "name"
    | "email"
    | "phone_number"
    | "password"
    | "confrim_password"
    | "pin"
    | "expiry"
    | "message"
    | "new_password";
