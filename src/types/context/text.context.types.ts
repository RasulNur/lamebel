import { Locale } from "../api/api.types";
import { TextKey } from "../api/text.types";
import { ReactNode } from "react";

export interface ITextContextProps {
    text: (key: TextKey) => string;
}
export interface ITextProvideProps {
    children: ReactNode;
    locale: Locale;
}
