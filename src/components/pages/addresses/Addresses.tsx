import { getAddresses } from "@/api/addressesApi";
import { getTexts } from "@/api/textsApi";
import AddressCard from "@/components/ui/cards/AddressCard";
import AddressModal from "@/components/ui/headless/AddressModal";
import Empty from "@/components/ui/Empty";
import { getCookies } from "next-client-cookies/server";
import { IAddressesProps } from "@/types/props/pages.types";

export default async function Addresses({ lang }: IAddressesProps) {
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
