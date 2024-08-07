import { getAddresses } from "@/api/addressesApi";
import { getTexts } from "@/api/textsApi";
import AddressCard from "@/components/ui/AddressCard";
import AddressModal from "@/components/ui/AddressModal";
import Empty from "@/components/ui/Empty";
import { Lang } from "@/types/api/api.types";
import { getCookies } from "next-client-cookies/server";

export default async function Addresses({ lang }: { lang: Lang }) {
    const cookies = getCookies();
    let addresses = await getAddresses({ token: cookies.get("token"), lang });
    const { text } = await getTexts({ lang });
    return (
        <>
            {typeof addresses !== "string" && (
                <div className="flex flex-col gap-[60px]">
                    {(!addresses.data ||
                        (addresses.data && addresses.data.length == 0)) && (
                        <Empty />
                    )}
                    {addresses.data && addresses.data.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-[60px]">
                            {addresses.data.map((address) => {
                                return (
                                    <AddressCard
                                        lang={lang}
                                        key={address.id}
                                        address={address}
                                    />
                                );
                            })}
                        </div>
                    )}

                    <AddressModal type="create" lang={lang} />
                </div>
            )}
        </>
    );
}
