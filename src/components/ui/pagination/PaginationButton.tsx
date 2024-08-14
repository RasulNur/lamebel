import { useText } from "@/context/text.context";
import Icon from "../Icon";
import { IPaginationButtonProps } from "@/types/props/ui.types";

export default function PaginationButton({
    handleClick,
    meta,
    type,
}: IPaginationButtonProps) {
    const { text } = useText();
    return (
        <button
            type="button"
            disabled={
                type == "prev"
                    ? meta.current_page == 1
                    : meta.current_page == meta.last_page
            }
            onClick={() =>
                type == "prev"
                    ? handleClick({ page: meta.current_page - 1 })
                    : handleClick({ page: meta.current_page + 1 })
            }
            className={`group flex ${
                type == "next" ? "flex-row-reverse" : ""
            } items-center gap-[5px] font-sm uppercase  md:p-0 sm:p-3 p-2`}>
            <Icon
                name="chevron"
                className={`stroke-primary group-hover:stroke-main size-[10px] ${
                    type == "next" ? "" : "rotate-180"
                }`}
            />
            <span className="md:inline hidden group-hover:text-main">
                {type == "prev"
                    ? text("Пред. && След.").split(" && ")[0]
                    : text("Пред. && След.").split(" && ")[1]}
            </span>
        </button>
    );
}
