import { ISectionHeaderProps } from "@/types/props/ui.types";

export default function SectionHeader({
    title,
    subtitle,
}: ISectionHeaderProps) {
    return (
        <div className="flex flex-col gap-1">
            <h4 className="font-semibold lg:text-lg text-base leading-160 uppercase text-placeholder">
                {subtitle}
            </h4>

            <h3 className="font-extrabold xl:text-[42px] lg:text-[36px] md:text-[28px] text-2xl leading-130 uppercase">
                {title}
            </h3>
        </div>
    );
}
