import toast from "react-hot-toast";

import {
    IProfile,
    IUpdatePasswordParams,
    IUpdatePhoneParams,
    IUpdateProfileParams,
} from "@/types/api/profile.types";

import { fetchGET, fetchMutate } from "./fetch";
import { Locale } from "@/types/api/api.types";

export const getProfile = async ({
    token,
    locale,
}: {
    token?: string;
    locale: Locale;
}) => {
    if (token) {
        return await fetchGET({
            url: "profile",
            tag: "Profile",
            token,
            locale,
        }).then((data: IProfile) => data);
    } else {
        return "Unauthorized";
    }
};

export const updateProfile = async ({
    token,
    body,
    locale,
}: IUpdateProfileParams) => {
    return await fetchMutate({
        method: "PUT",
        url: "profile/update",
        tag: "Profile",
        body,
        token,
        locale,
    }).then((data: IProfile) => data);
};

export const updatePassword = async ({
    token,
    body,
    locale,
}: IUpdatePasswordParams) => {
    return await fetchMutate({
        method: "PUT",
        url: "profile/password/update",
        tag: "Profile",
        body,
        token,
        locale,
    });
};

export const updatePhone = async ({
    token,
    body,
    locale,
}: IUpdatePhoneParams) => {
    return await fetchMutate({
        method: "PUT",
        url: "profile/phone-number/update",
        tag: "Profile",
        body,
        token,
        locale,
    }).then((data: { message: string }) => {
        toast.success(data.message);
    });
};
