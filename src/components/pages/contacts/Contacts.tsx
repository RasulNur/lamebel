import { ISettings } from "@/types/api/settings.types";
import ContactsLinks from "./contactsLinks/ContactsLinks";
import ContactsForm from "./contactsForm/ContactsForm";
import { Lang } from "@/types/api/api.types";

export default function Contacts({
    settings,
    lang,
}: {
    settings: ISettings;
    lang: Lang;
}) {
    return (
        <div className="flex flex-col gap-10">
            <p className="leading-150 max-w-[900px]">
                Если у вас возникли вопросы о нашем продукте или вы хотите
                узнать больше о предприятии и производстве, свяжитесь с нами. Мы
                всегда рады помочь и обсудить возможности сотрудничества.
            </p>
            <div className="grid lg:grid-cols-[1fr,1.4fr] xl:gap-20 gap-10">
                <ContactsLinks settings={settings} />

                <ContactsForm lang={lang} />
            </div>
        </div>
    );
}
