import classNames from "classnames";
import { Link } from "@/i18n/routing";
import Icon from "@/components/ui/Icon";
import { IDashboardLinkProps } from "@/types/props/pages.types";

export default function DashboardLink({
    tab,
    activeRoute,
}: IDashboardLinkProps) {
    const linkCommonClassName = `flex items-center gap-3 font-medium group hover:text-main py-2`;
    const iconCommonClassName = `group-hover:stroke-main !size-6`;
    return (
        <Link
            href={`/dashboard/${tab.route}`}
            key={tab.id}
            className={classNames(
                linkCommonClassName,
                ` ${tab.route === activeRoute ? "text-main" : ""}`,
            )}>
            <Icon
                name={tab.iconName}
                className={classNames(
                    iconCommonClassName,

                    `${
                        tab.route === activeRoute
                            ? "stroke-main"
                            : "stroke-primary"
                    }`,
                )}
            />
            {tab.title}
        </Link>
    );
}
