import { IFetchGetParams, IFetchMutateParams } from "@/types/api/api.types";
import toast from "react-hot-toast";

const API_URL = process.env.API;

export const fetchMutate = async ({
    body,
    url,
    tag,
    lang,
    method,
    token,
    contentType = "application/json",
}: IFetchMutateParams) => {
    return await fetch(`${API_URL}${url}`, {
        method: method,
        next: { tags: [tag] },
        cache: "no-cache",
        body: JSON.stringify(body),
        headers: token
            ? {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": contentType,
                  Accept: "application/json",
                  "Accept-Language": lang,
              }
            : {
                  "Content-Type": contentType,
                  Accept: "application/json",
                  "Accept-Language": lang,
              },
    })
        .then((response) => {
            if (response.status == 429) {
                toast.error("Слишком много запросов");
                return;
            }

            return response.json();
        })
        .catch((err) => {
            throw err;
        });
};

export const fetchGET = async ({ url, lang, tag, token }: IFetchGetParams) => {
    return await fetch(`${API_URL}${url}`, {
        next: { tags: [tag] },
        cache: "no-cache",
        headers: token
            ? {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "Accept-Language": lang,
              }
            : {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "Accept-Language": lang,
              },
    })
        .then((response) => {
            if (response.status == 429) {
                toast.error("Слишком много запросов");
                return;
            } else if (response.status == 401) {
                toast.error("Unauthorized");
                return;
            }
            return response.json();
        })
        .catch((err) => {
            throw err;
        });
};
