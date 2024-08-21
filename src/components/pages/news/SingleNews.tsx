import { ISingleNewsProps } from "@/types/props/pages.types";

export default function SingleNews({ publication }: ISingleNewsProps) {
    return (
        <div
            className="text-section lg:mt-10 mt-5"
            dangerouslySetInnerHTML={{
                __html: publication.data.body,
            }}></div>
    );
}
