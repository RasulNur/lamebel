import { getProfile } from "@/api/profileApi";
import { getCookies } from "next-client-cookies/server";
import { getTexts } from "@/api/textsApi";
import UpdateProfile from "./updateProfile/UpdateProfile";
import UpdatePhone from "./updatePhone/UpdatePhone";
import UpdatePassword from "./updatePassword/UpdatePassword";
import { IProfileProps } from "@/types/props/pages.types";

export default async function Profile({ lang }: IProfileProps) {
    const cookies = getCookies();
    const profile = await getProfile({ token: cookies.get("token"), lang });
    const { text } = await getTexts({ lang });

    return (
        <div className="flex flex-col gap-16">
            <div>
                <h3 className="font-medium text-lg text-center leading-130 mb-4 w-max">
                    {text("Ваши данные")}
                </h3>
                {typeof profile !== "string" && (
                    <>
                        <UpdateProfile profile={profile} lang={lang} />
                    </>
                )}
            </div>
            {typeof profile !== "string" && (
                <>
                    <UpdatePhone profile={profile} lang={lang} />
                </>
            )}

            <UpdatePassword lang={lang} />
        </div>
    );
}
