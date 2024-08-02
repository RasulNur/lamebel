"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { deleteAddress } from "@/api/addressesApi";
import { useState } from "react";
import OvalSpinner from "./OvalSpinner";
import { useText } from "@/context/text.context";
import { IAddressCardProps } from "@/types/props.types";

export default function AddressCard({ address, lang }: IAddressCardProps) {
    const cookies = useCookies();
    const token = cookies.get("token");
    const { refresh } = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { text } = useText();

    const handleDelete = () => {
        try {
            if (token) {
                setIsLoading(true);
                deleteAddress({
                    addressId: address.id,
                    token,
                    lang,
                })
                    .then(() => {
                        refresh();
                    })
                    .finally(() => setIsLoading(false));
            }
        } catch (err) {
            throw err;
        }
    };

    return (
        <div>
            <div className="flex justify-between flex-col items-start gap-4 h-full">
                <div className="flex gap-2 flex-col">
                    <h3 className="text-lg uppercase font-medium">
                        {address.address_line_1}
                    </h3>
                    {address.address_line_2 && (
                        <address className="leading-110">
                            {address.address_line_2}
                        </address>
                    )}
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href={`/dashboard/addresses/update/${address.id}?lat=${address.latitude}&lng=${address.longitude}`}
                        className="text-sm leading-110 hover:text-main">
                        {text("Изменить")}
                    </Link>
                    <button
                        disabled={isLoading}
                        className="flex-center gap-[5px] text-sm leading-110 hover:enabled:text-main"
                        onClick={handleDelete}>
                        {isLoading && <OvalSpinner size={14} />}
                        {text("Удалить")}
                    </button>
                </div>
            </div>
        </div>
    );
}
