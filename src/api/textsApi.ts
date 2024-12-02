import { Locale } from "@/types/api/api.types";

import { ITexts, TextKey } from "../types/api/text.types";

import { fetchGET } from "./fetch";

export const fetchTexts = async ({ locale }: { locale: Locale }) => {
    let texts: ITexts = { data: [] };
    await fetchGET({ url: "texts", tag: "Texts", locale }).then(
        (data: ITexts) => (texts = data),
    );
    return texts;
};

export const getTexts = async ({ locale }: { locale: Locale }) => {
    const texts = await fetchTexts({ locale });

    return {
        texts,
        text: (key: TextKey) =>
            texts.data.find((el) => el.key == key)?.value || key,
    };
};
