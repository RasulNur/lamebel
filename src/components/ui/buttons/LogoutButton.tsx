"use client";

import { logout } from "@/api/authApi";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import Icon from "../Icon";
import { useText } from "@/context/text.context";
import { useState } from "react";
import OvalSpinner from "../OvalSpinner";
import { ILogoutButtonProps } from "@/types/props.types";

export default function LogoutButton({ lang }: ILogoutButtonProps) {
    const cookies = useCookies();
    let token = cookies.get("token");
    const { refresh, replace } = useRouter();
    const { text } = useText();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleLogout = () => {
        if (typeof token !== "undefined") {
            setIsLoading(true);
            logout({ token, lang })
                .then(() => {
                    replace("/");
                    refresh();
                })
                .finally(() => setIsLoading(false));
        }
    };
    return (
        <button
            type="button"
            className={
                "flex items-center gap-3 font-medium group hover:text-main py-2 w-full"
            }
            onClick={handleLogout}>
            {isLoading ? (
                <OvalSpinner size={24} type="second" />
            ) : (
                <Icon name="exit" className={"group-hover:fill-main !size-6"} />
            )}

            {text("Выйти")}
        </button>
    );
}
