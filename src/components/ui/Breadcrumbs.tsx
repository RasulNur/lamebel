import { Link } from "@/i18n/routing";
import Icon from "./Icon";
import { IBreadcrumbsProps } from "@/types/props/ui.types";

export default function Breadcrumbs({ breadcrumbs }: IBreadcrumbsProps) {
    return (
        <div className="flex items-center gap-3 flex-wrap">
            {breadcrumbs.links.map((link, id) => {
                return (
                    <div className="flex items-center gap-3" key={id}>
                        <Link
                            className="leading-160 text-sm hover:text-main"
                            href={link.href}>
                            {link.title}
                        </Link>
                        <Icon
                            name="chevron"
                            className="stroke-primary !size-3"
                        />
                    </div>
                );
            })}

            <p className="text-sm leading-160 text-secondary3">
                {breadcrumbs.current}
            </p>
        </div>
    );
}
