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
    locale,
}: IGetPublicationsParams) => {
    return await fetchGET({
        url: `publications?type=${type}&page=${page}&quantity=${quantity}`,
        tag: "Publications",
        locale,
    }).then((data: IPublications) => data);
};

export const getPublication = async ({ id, locale }: IGetPublicationParams) => {
    return await fetchGET({
        url: `publications/${id}`,
        tag: "Publications",
        locale,
    }).then((data: ISinglePublication) => data);
};
