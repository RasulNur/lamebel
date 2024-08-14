import { ICheckboxProps } from "@/types/props/ui.types";

export default function Checkbox({
    label,
    handleChecked,
    isChecked,
}: ICheckboxProps) {
    return (
        <label className="flex items-center gap-3 text-sm leading-150 cursor-pointer group hover:text-main transition-300">
            <input
                type="checkbox"
                className="min-w-6 min-h-6 size-6 rounded-[4px] appearance-none border border-secondary3 group-hover:border-main relative outline-none focus-visible:border-main checked:border-main checked:bg-main checked:after:absolute checked:after:block checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:size-3 after:z-[1] checked:after:bg-[url(/images/check.svg)] after:bg-no-repeat after:bg-center after:cursor-pointer cursor-pointer after:bg-contain transition-300"
                checked={isChecked}
                onChange={() => handleChecked()}
            />
            {label}
        </label>
    );
}
