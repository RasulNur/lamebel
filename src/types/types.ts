import { FormikState } from "formik";
import { Dispatch, SetStateAction } from "react";
import { Lang } from "./api/api.types";

export type SpritesName =
    | "telegram"
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
    | "new_password";

export interface ISubmitFormFuncParams<FormValues> {
    values: FormValues;
    resetForm: (
        nextState?: Partial<FormikState<FormValues>> | undefined,
    ) => void;
}
export type SortDirectionType = "asc" | "desc";

export type OrderBy = "created_at" | "price" | "views" | "rating" | "discount";

export interface IUseLimitParams {
    data: any[];
    limitNumber: number;
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
