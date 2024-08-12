import { FormikErrors, FormikState } from "formik";
import { Dispatch, SetStateAction } from "react";
import { IMeta, Lang } from "./api/api.types";
import { IProduct } from "./api/products.types";

export type SpritesName =
    | "telegram"
    | "check"
    | "menu"
    | "x"
    | "heart"
    | "loupe"
    | "chevron"
    | "tag"
    | "location"
    | "mail"
    | "user"
    | "eye-off"
    | "eye"
    | "phone"
    | "filter"
    | "exit"
    | "minus"
    | "fire"
    | "trash"
    | "plus"
    | "star"
    | "cart";

export type SetState<T> = Dispatch<SetStateAction<T>>;

export type InputNames =
    | "name"
    | "email"
    | "phone_number"
    | "password"
    | "confrim_password"
    | "pin"
    | "expiry"
    | "message"
    | "address"
    | "new_password";

export interface ISubmitFormFuncParams<FormValues> {
    values: FormValues;
    resetForm: (
        nextState?: Partial<FormikState<FormValues>> | undefined,
    ) => void;
    setSubmitting?: (isSubmitting: boolean) => void;
    setFieldValue?: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<FormValues>>;
}

export type SortDirectionType = "asc" | "desc";

export type OrderBy = "created_at" | "price" | "views" | "rating" | "discount";

export interface IUseLimitParams {
    data: any[];
    limitNumber: number;
}
export interface IUsePaginationParams {
    meta: IMeta;
}

export interface ILangOption {
    id: number;
    lang: Lang;
    label: string;
}

export type AuthTab = "login" | "register" | "reset-password";

export type FulfillAfterOtpType = ({ otp }: { otp: string }) => void;

export type DashboardRoutes = "orders" | "profile" | "addresses";

export interface IDashboardTab {
    id: number;
    title: string;
    iconName: SpritesName;
    route: DashboardRoutes;
}

export type PaymentMethodType = "cash" | "card" | "installment" | "alifnasiya";

export type ShippingMethodType = "free" | "pickup";

export interface IGroupAttribute {
    id: number;
    parentId: number;
    isActive: boolean;
}

export interface IUseQuantityParams {
    productQuantity: number;
    setQuantity?: SetState<number>;
    product: IProduct;
    // setIsLoading: SetState<IQuantityChangerLoading>;
}

export interface ISetItemWithExpiryParams {
    key: string;
    value: string;
    expireTime: number;
}
