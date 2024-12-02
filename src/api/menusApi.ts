import { IGetMenuParams, IMenus } from "@/types/api/menus.types";

import { ISingleMenu } from "../types/api/menus.types";

import { fetchGET } from "./fetch";
import { Locale } from "@/types/api/api.types";

export const getMenus = async ({ locale }: { locale: Locale }) => {
    return await fetchGET({ url: "menus", tag: "Menus", locale }).then(
        (data: IMenus) => data,
    );
};

export const getMenu = async ({ menuId, locale }: IGetMenuParams) => {
    return await fetchGET({
        url: `menus/${menuId}`,
        tag: "Menus",
        locale,
    }).then((data: ISingleMenu) => data);
};
