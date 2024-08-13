import { IIconProps } from "@/types/props.types";

export default function Icon({
    name,
    className = "",
    ...otherProps
}: IIconProps) {
    return (
        <svg
            focusable="false"
            aria-hidden="true"
            className={`block transition-300 size-4 ${className}`}
            {...otherProps}>
            <use xlinkHref={`/svgs/${name}.svg#${name}`} />
        </svg>
    );
}
