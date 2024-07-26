import { getTexts } from "@/api/textsApi";
import { Lang } from "@/types/api/api.types";
import Link from "next/link";

export default async function NotFoundText({ lang }: { lang: Lang }) {
    const { text } = await getTexts({ lang });
    return (
        <div className="max-w-[476px] mx-auto text-center flex flex-col items-center py-[80px]">
            <h1 className="md:text-2xl leading-120 mb-3">
                {text("Страница не найдена")}
            </h1>
            <p className="text-sm leading-24 mb-6">
                {text(
                    "Нужная вам страница либо удалена либо перемещена по новому адресу",
                )}
            </p>
            <Link href="/" replace={true} className="red-btn red-link">
                {text("Вернуться на главную")}
            </Link>
        </div>
    );
}
