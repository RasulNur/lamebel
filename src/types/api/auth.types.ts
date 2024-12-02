import { Locale } from "./api.types";

export interface IRegisterBody {
    name: string;
    phone_number: string;
    password: string;
    otp: number;
}
export interface ILoginBody {
    phone_number: string;
    password: string;
}
export interface IOtpCheckBody {
    phone_number: string;
    otp: number;
    target: OtpTarget;
}
export interface IResetPasswordBody {
    phone_number: string;
    new_password: string;
    otp: number;
}

export interface IRegisterParams {
    body: IRegisterBody;
    locale: Locale;
}
export interface ILogingParams {
    body: ILoginBody;
    locale: Locale;
}
export interface ILoginCheckParams {
    body: { phone_number: string };
    locale: Locale;
}

export interface ISendOtpParams {
    body: { phone_number: string; target: OtpTarget };
    locale: Locale;
}

export type OtpTarget = "registration" | "reset_password" | "verification";

export interface IOtpCheckParams {
    body: IOtpCheckBody;
    locale: Locale;
}

export interface ILogoutParams {
    token: string;
    locale: Locale;
}

export interface IResetPasswordParams {
    body: IResetPasswordBody;
    locale: Locale;
}
