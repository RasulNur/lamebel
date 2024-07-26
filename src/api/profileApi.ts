import toast from "react-hot-toast";

import {
    IProfile,
    IUpdatePasswordParams,
    IUpdatePhoneParams,
    IUpdateProfileParams,
} from "@/types/api/profile.types";

import { fetchGET, fetchMutate } from "./fetch";
import { Lang } from "@/types/api/api.types";

export const getProfile = async ({
    token,
    lang,
}: {
    token?: string;
    lang: Lang;
}) => {
    if (token) {
        return await fetchGET({
            url: "profile",
            tag: "Profile",
            token,
            lang,
        }).then((data: IProfile) => data);
    } else {
        return "Unauthorized";
    }
};

export const updateProfile = async ({
    token,
    body,
    lang,
}: IUpdateProfileParams) => {
    return await fetchMutate({
        method: "PUT",
        url: "profile/update",
        tag: "Profile",
        body,
        token,
        lang,
    }).then((data: IProfile) => data);
};

export const updatePassword = async ({
    token,
    body,
    lang,
}: IUpdatePasswordParams) => {
    return await fetchMutate({
        method: "PUT",
        url: "profile/password/update",
        tag: "Profile",
        body,
        token,
        lang,
    });
};

export const updatePhone = async ({
    token,
    body,
    lang,
}: IUpdatePhoneParams) => {
    return await fetchMutate({
        method: "PUT",
        url: "profile/phone-number/update",
        tag: "Profile",
        body,
        token,
        lang,
    }).then((data: { message: string }) => {
        toast.success(data.message);
    });
};
