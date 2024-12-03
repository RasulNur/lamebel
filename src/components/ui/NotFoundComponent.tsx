import { getTexts } from "@/api/textsApi";
import { Link } from "@/i18n/routing";
import { getLocale } from "next-intl/server";
import React from "react";

export default async function NotFoundComponent() {
    const locale = await getLocale();
    const { text } = await getTexts(
        locale === "ru" || locale === "uz" ? { locale } : { locale: "ru" },
    );
    return (
        <div className="max-w-[476px] mx-auto text-center flex flex-col items-center py-[80px]">
            <h1 className="leading-120 md:text-2xl mb-3">
                {text("Страница не найдена")}
            </h1>
            <p className="leading-120 text-sm mb-6">
                {text(
                    "Нужная вам страница либо удалена либо перемещена по новому адресу",
                )}
            </p>
            <Link href="/" replace={true} className="btn-main">
                {text("Вернуться на главную")}
            </Link>
        </div>
    );
}
