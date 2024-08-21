import { Lang } from "./api.types";

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
    lang: Lang;
}
export interface ILogingParams {
    body: ILoginBody;
    lang: Lang;
}
export interface ILoginCheckParams {
    body: { phone_number: string };
    lang: Lang;
}

export interface ISendOtpParams {
    body: { phone_number: string; target: OtpTarget };
    lang: Lang;
}

export type OtpTarget = "registration" | "reset_password" | "verification";

export interface IOtpCheckParams {
    body: IOtpCheckBody;
    lang: Lang;
}

export interface ILogoutParams {
    token: string;
    lang: Lang;
}

export interface IResetPasswordParams {
    body: IResetPasswordBody;
    lang: Lang;
}
