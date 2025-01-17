import toast from "react-hot-toast";
import { deleteCookie, setCookie } from "cookies-next";

import { fetchMutate } from "./fetch";
import { getTexts } from "./textsApi";
import {
    ILoginCheckParams,
    ILogingParams,
    ILogoutParams,
    IOtpCheckParams,
    IRegisterParams,
    IResetPasswordParams,
    ISendOtpParams,
} from "@/types/api/auth.types";

export const register = async ({ body, locale }: IRegisterParams) => {
    const { text } = await getTexts({ locale });
    return await fetchMutate({
        url: "register",
        body,
        method: "POST",
        tag: "Auth",
        locale,
    }).then((data: { token: string }) => {
        setCookie("token", data.token, {
            maxAge: 30 * 24 * 60 * 60,
        });
        toast.success(text("Регистрация прошла успешно"));
    });
};

export const login = async ({ body, locale }: ILogingParams) => {
    return await fetchMutate({
        url: "login",
        body,
        method: "POST",
        tag: "Auth",
        locale,
    }).then((data: { message?: string; token?: string }) => {
        if (data.message) {
            toast.error(data.message);
            return false;
        } else if (data.token) {
            setCookie("token", data.token, {
                maxAge: 30 * 24 * 60 * 60,
            });
            toast.success("Вход выполнен успешно!");
            return true;
        }
    });
};

export const loginCheck = async ({ body, locale }: ILoginCheckParams) => {
    return await fetchMutate({
        url: "login/check",
        body,
        method: "POST",
        tag: "Auth",
        locale,
    }).then((data: { user_exists: boolean }) => {
        return data;
    });
};

export const sendOtp = async ({ body, locale }: ISendOtpParams) => {
    return await fetchMutate({
        url: "otp",
        body,
        method: "POST",
        tag: "Auth",
        locale,
    }).then((data: { message: string }) => {
        console.log({ sendOtp: data });
        toast.success(data.message);
    });
};

export const otpCheck = async ({ body, locale }: IOtpCheckParams) => {
    return await fetchMutate({
        url: "otp/check",
        body,
        method: "POST",
        tag: "Auth",
        locale,
    }).then(
        (data: {
            message?: string;
            errors?: { otp: string[]; message: string };
        }) => {
            console.log({ otpCheck: data });
            if (data.errors && data.errors.otp) {
                toast.error(data.errors.otp[0]);
            }
            return data;
        },
    );
};

export const logout = async ({ token, locale }: ILogoutParams) => {
    return await fetchMutate({
        url: "logout",
        method: "POST",
        tag: "Auth",
        token: token,
        locale,
    }).then((data: { message: string }) => {
        data && data.message && toast.success(data.message);
        deleteCookie("token");
        return data;
    });
};

export const resetPassword = async ({ body, locale }: IResetPasswordParams) => {
    return await fetchMutate({
        url: "reset-password",
        body,
        method: "POST",
        tag: "Auth",
        locale,
    }).then((data: { message: string }) => {
        toast.success(data.message);
    });
};
