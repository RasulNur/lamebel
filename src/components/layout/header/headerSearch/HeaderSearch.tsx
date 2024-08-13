import SearchForm from "@/components/ui/SearchForm";
import { useState } from "react";

export default function HeaderSearch() {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    return (
        <SearchForm
            setIsFocused={setIsFocused}
            className={`lg:block hidden ${
                isFocused ? "grow" : "max-w-[150px]"
            } transition-all duration-500`}
            inputClassName="!rounded-[32px]"
        />
    );
}
