import Icon from "@/components/ui/Icon";
import { IContactsLinksProps } from "@/types/props/pages.types";
import { numberWithSpaces } from "@/utils/numberWithSpaces";
import { Link } from "@/i18n/routing";

export default function ContactsLinks({ settings }: IContactsLinksProps) {
    return (
        <div>
            <h3 className="lg:text-2xl md:text-xl text-lg leading-110 font-semibold mb-8">
                Наши контакты
            </h3>
            <div className="flex flex-col gap-4">
                <Link
                    href={`tel:${settings.phone}`}
                    className="group hover:text-main flex items-center gap-2 py-2">
                    <Icon
                        name="phone"
                        className="stroke-primary group-hover:stroke-main size-5"
                    />

                    {numberWithSpaces(settings.phone, "#### ## ### ## ##")}
                </Link>
                <div className=" flex items-center gap-2 py-2">
                    <Icon name="location" className="stroke-primary size-5" />
                    {settings.address}
                </div>
                <Link
                    href={`mailto:${settings.email}`}
                    className="group hover:text-main flex items-center gap-2 py-2">
                    <Icon
                        name="mail"
                        className="stroke-primary group-hover:stroke-main size-5"
                    />
                    {settings.email}
                </Link>
            </div>
        </div>
    );
}
