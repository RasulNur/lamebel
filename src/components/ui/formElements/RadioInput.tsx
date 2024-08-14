import { IRadioInputProps } from "@/types/props/ui.types";
import { Field } from "formik";

export default function RadioInput({ name, value, title }: IRadioInputProps) {
    const className =
        "min-w-5 min-h-5 size-5 rounded-full appearance-none border border-secondary3 group-hover:border-main relative outline-none focus-visible:border-main checked:border-main checked:after:absolute checked:after:block checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:bg-main after:rounded-full checked:after:size-3 after:z-[1] after:transition-colors after:cursor-pointer cursor-pointer after:duration-300 transition-300";
    return (
        <label className="flex items-center gap-3 text-sm leading-150 cursor-pointer group hover:text-main transition-300">
            <Field
                type="radio"
                name={name}
                value={value}
                className={className}
            />

            {title}
        </label>
    );
}
