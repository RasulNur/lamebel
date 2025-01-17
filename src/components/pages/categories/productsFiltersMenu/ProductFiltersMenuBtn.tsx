import Icon from "@/components/ui/Icon";
import { useText } from "@/context/text.context";
import { IProductFiltersMenuBtnProps } from "@/types/props/pages.types";

export default function ProductFiltersMenuBtn({
    openModal,
}: IProductFiltersMenuBtnProps) {
    const { text } = useText();
    return (
        <button
            type="button"
            className="py-2 transition-300 flex items-center gap-[10px] hover:invert-[0.4]"
            onClick={openModal}>
            <Icon name="filter" className="size-4 fill-primary" />

            {text("Фильтры")}
        </button>
    );
}
