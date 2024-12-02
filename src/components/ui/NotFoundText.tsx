import { getTexts } from "@/api/textsApi";
import { INotFoundTextProps } from "@/types/props/ui.types";
import { Link } from "@/i18n/routing";

export default async function NotFoundText({ locale }: INotFoundTextProps) {
    const { text } = await getTexts({ locale });
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
