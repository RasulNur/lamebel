import { ISinglePublication } from "@/types/api/publications.types";

export default function SingleNews({
    publication,
}: {
    publication: ISinglePublication;
}) {
    return (
        <div
            className="text-section lg:mt-10 mt-5"
            dangerouslySetInnerHTML={{
                __html: publication.data.body,
            }}></div>
    );
}
