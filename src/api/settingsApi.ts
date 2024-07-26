import { ISettings } from "@/types/api/settings.types";

import { fetchGET } from "./fetch";
import { Lang } from "@/types/api/api.types";

export const getSettings = async ({ lang }: { lang: Lang }) => {
    return await fetchGET({ url: "settings", tag: "Settings", lang }).then(
        (data: ISettings) => data,
    );
};
