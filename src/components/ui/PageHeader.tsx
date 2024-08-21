import Breadcrumbs from "./Breadcrumbs";
import { IPageHeaderProps } from "@/types/props/ui.types";

export default function PageHeader({ title, breadcrumbs }: IPageHeaderProps) {
    return (
        <div className="container py-5 flex flex-col gap-3">
            <Breadcrumbs breadcrumbs={breadcrumbs} />

            <h1 className="font-bold lg:text-[28px] md:text-2xl text-xl leading-120">
                {title}
            </h1>
        </div>
    );
}
