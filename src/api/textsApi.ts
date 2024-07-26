import { Lang } from "@/types/api/api.types";

import { ITexts, TextKey } from "../types/api/text.types";

import { fetchGET } from "./fetch";

export const fetchTexts = async ({ lang }: { lang: Lang }) => {
    let texts: ITexts = { data: [] };
    await fetchGET({ url: "texts", tag: "Texts", lang }).then(
        (data: ITexts) => (texts = data),
    );
    return texts;
};

export const getTexts = async ({ lang }: { lang: Lang }) => {
    const texts = await fetchTexts({ lang });

    return {
        texts,
        text: (key: TextKey) =>
            texts.data.find((el) => el.key == key)?.value || key,
    };
};
