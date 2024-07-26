import { SVGProps } from "react";
import { SpritesName } from "./types";

export interface IIconProps
    extends Omit<SVGProps<SVGSVGElement>, "name" | "type"> {
    name: SpritesName;
    className?: string;
}
