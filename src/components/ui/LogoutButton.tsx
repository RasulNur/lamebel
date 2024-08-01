"use client";

import { logout } from "@/api/authApi";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import Icon from "./Icon";
import { useText } from "@/context/text.context";
import { Lang } from "@/types/api/api.types";

export default function LogoutButton({ lang }: { lang: Lang }) {
    const cookies = useCookies();
    let token = cookies.get("token");
    const { refresh, replace } = useRouter();
    const { text } = useText();
    const handleLogout = () => {
        if (typeof token !== "undefined") {
            logout({ token, lang }).then(() => {
                replace("/");
                refresh();
            });
        }
    };
    return (
        <button
            type="button"
            className={
                "flex items-center gap-3 font-medium group hover:text-main py-2 w-full"
            }
            onClick={handleLogout}>
            <Icon name="exit" className={"group-hover:fill-main !size-6"} />
            {text("Выйти")}
        </button>
    );
}
