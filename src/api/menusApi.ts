import { IGetMenuParams, IMenus } from "@/types/api/menus.types";

import { ISingleMenu } from "../types/api/menus.types";

import { fetchGET } from "./fetch";
import { Lang } from "@/types/api/api.types";

export const getMenus = async ({ lang }: { lang: Lang }) => {
    return await fetchGET({ url: "menus", tag: "Menus", lang }).then(
        (data: IMenus) => data,
    );
};

export const getMenu = async ({ menuId, lang }: IGetMenuParams) => {
    return await fetchGET({ url: `menus/${menuId}`, tag: "Menus", lang }).then(
        (data: ISingleMenu) => data,
    );
};
