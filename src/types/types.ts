import { FormikState } from "formik";
import { Dispatch, SetStateAction } from "react";

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
    | "phone"
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
