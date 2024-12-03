import { IGetPageParams, IPages, ISinglePage } from "@/types/api/pages.types";

import { fetchGET } from "./fetch";
import { Locale } from "@/types/api/api.types";

export const getPages = async ({ locale }: { locale: Locale }) => {
    return await fetchGET({
        url: "pages",
        tag: "Pages",
        locale,
    }).then((data: IPages) => data);
};

export const getPage = async ({ locale, pageId }: IGetPageParams) => {
    return await fetchGET({
        url: `pages/${pageId}`,
        tag: "Pages",
        locale,
    }).then((data: ISinglePage) => data);
};
