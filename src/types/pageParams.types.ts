import { Lang } from "./api/api.types";

export interface IRootLayoutParams {
    children: React.ReactNode;
    params: { lang: Lang };
}
