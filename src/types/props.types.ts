import { SVGProps } from "react";
import { InputNames, SpritesName } from "./types";

export interface IIconProps
    extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
    name: SpritesName;
    className?: string;
}

export interface IOverlapInputProps {
    id: string;
    placeholder: string;
    name: InputNames;
    inputClass?: string;
    disabled?: boolean;
    minLength?: number;
    maxLength?: number;
}
