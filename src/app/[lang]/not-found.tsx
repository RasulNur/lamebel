import { getTexts } from "@/api/textsApi";
import NotFoundText from "@/components/ui/NotFoundText";
import { getCookies } from "next-client-cookies/server";

export default async function NotFoundPage() {
    const cookies = getCookies();
    const lang = cookies.get("NEXT_LOCALE");

    return (
        <div className="container">
            {(lang == "uz" || lang == "ru") && <NotFoundText lang={lang} />}
        </div>
    );
}

export async function generateMetadata() {
    const cookies = getCookies();
    const lang = cookies.get("NEXT_LOCALE");
    const { text } = await getTexts({
        lang: lang == "uz" || lang == "ru" ? lang : "ru",
    });

    return {
        title: text("Страница не найдена"),
        description: text("Страница не найдена"),
        keywords: text("Страница не найдена"),
    };
}
