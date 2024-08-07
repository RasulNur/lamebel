import { IBlockForScrollProps } from "@/types/props.types";

export default function BlockForScroll({ id }: IBlockForScrollProps) {
    return <div id={id} className="absolute lg:-top-[160px] -top-[95px]"></div>;
}
