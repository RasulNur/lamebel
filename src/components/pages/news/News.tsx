import Empty from "@/components/ui/Empty";
import NewsCard from "@/components/ui/NewsCard";
import Pagination from "@/components/ui/pagination/Pagination";
import { INewsProps } from "@/types/props.types";

export default function News({ news }: INewsProps) {
    return (
        <>
            {(!news.data || (news.data && news.data.length == 0)) && <Empty />}
            {news.data && news.data.length > 0 && (
                <div className="flex flex-col gap-10">
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-5">
                        {news.data.map((singleNews) => {
                            return (
                                <NewsCard
                                    singleNews={singleNews}
                                    key={singleNews.id}
                                />
                            );
                        })}
                    </div>
                    {news.meta.last_page > 1 && <Pagination meta={news.meta} />}
                </div>
            )}
        </>
    );
}
