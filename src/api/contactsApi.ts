import toast from "react-hot-toast";

import { ISendFeedbackParams } from "@/types/api/contacts.types";

import { fetchMutate } from "./fetch";

export const sendFeedback = async ({ body, locale }: ISendFeedbackParams) => {
    return await fetchMutate({
        url: "feedback",
        body,
        method: "POST",
        tag: "Feedback",
        locale,
    }).then((data: { message: string }) => {
        toast.success(data.message);
    });
};
