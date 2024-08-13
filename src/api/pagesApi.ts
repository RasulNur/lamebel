import { IGetPageParams, IPages, ISinglePage } from "@/types/api/pages.types";

import { fetchGET } from "./fetch";
import { Lang } from "@/types/api/api.types";

export const getPages = async ({ lang }: { lang: Lang }) => {
    return await fetchGET({
        url: "pages",
        tag: "Pages",
        lang,
    }).then((data: IPages) => data);
};

export const getPage = async ({ lang, pageId }: IGetPageParams) => {
    return await fetchGET({
        url: `pages/${pageId}`,
        tag: "Pages",
        lang,
    }).then((data: ISinglePage) => data);
};
