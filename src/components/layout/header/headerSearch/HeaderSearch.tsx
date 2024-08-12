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
        // <button
        //     type="button"
        //     className="2xl:flex hidden group sm:p-2 p-1"
        //     onClick={() => setIsSearchOpen((prev) => !prev)}>
        //     <Icon
        //         name="loupe"
        //         className="stroke-primary group-hover:stroke-main size-5"
        //     />
        // </button>
    );
}
