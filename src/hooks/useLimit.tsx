import { IUseLimitParams } from "@/types/types";
import { useState } from "react";

export default function useLimit({ data, limitNumber }: IUseLimitParams) {
    const [limit, setLimit] = useState<number>(limitNumber);
    const [isShow, setIsShow] = useState<boolean>(false);

    const handleLimit = () => {
        if (isShow) {
            setIsShow(false);
            setLimit(limitNumber);
        } else if (!isShow) {
            setIsShow(true);
            setLimit(data.length);
        }
    };

    return { limit, handleLimit, isShow };
}
