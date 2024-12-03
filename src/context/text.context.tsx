"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { getTexts } from "@/api/textsApi";
import { ITexts, TextKey } from "@/types/api/text.types";
import {
    ITextContextProps,
    ITextProvideProps,
} from "@/types/context/text.context.types";

const TextContext = createContext<ITextContextProps>({
    text: () => "",
});

export const TextProvider = ({ children, locale }: ITextProvideProps) => {
    const [texts, setTexts] = useState<ITexts>({ data: [] });

    useEffect(() => {
        getTexts({ locale }).then(({ texts }) => {
            setTexts(texts);
        });
    }, []);

    const text = (key: TextKey) => {
        return texts.data.find((el) => el.key == key)?.value || key;
    };

    const values = { text };

    return (
        <TextContext.Provider value={values}>{children}</TextContext.Provider>
    );
};

export const useText = () => useContext(TextContext);
