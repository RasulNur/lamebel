import { Dispatch, SetStateAction } from "react";

export type SpritesName = "telegram" | "menu" | "x";

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
