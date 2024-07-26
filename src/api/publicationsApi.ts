import {
    IGetPublicationParams,
    IGetPublicationsParams,
    IPublications,
    ISinglePublication,
} from "@/types/api/publications.types";

import { fetchGET } from "./fetch";

export const getPublications = async ({
    type,
    page,
    quantity,
    lang,
}: IGetPublicationsParams) => {
    return await fetchGET({
        url: `publications?type=${type}&page=${page}&quantity=${quantity}`,
        tag: "Publications",
        lang,
    }).then((data: IPublications) => data);
};

export const getPublication = async ({ id, lang }: IGetPublicationParams) => {
    return await fetchGET({
        url: `publications/${id}`,
        tag: "Publications",
        lang,
    }).then((data: ISinglePublication) => data);
};
