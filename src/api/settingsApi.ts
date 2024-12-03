import { ISettings } from "@/types/api/settings.types";

import { fetchGET } from "./fetch";
import { Locale } from "@/types/api/api.types";

export const getSettings = async ({ locale }: { locale: Locale }) => {
    return await fetchGET({ url: "settings", tag: "Settings", locale }).then(
        (data: ISettings) => data,
    );
};
