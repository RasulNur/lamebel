"use client";

import OverlapInput from "@/components/ui/OverlapInput";
import CheckoutShipping from "./checkoutShipping/CheckoutShipping";
import CheckoutPayment from "./checkoutPayment/CheckoutPayment";
import CheckoutAddresses from "./checkoutAddresses/CheckoutAddresses";
import { useText } from "@/context/text.context";
import { ICheckoutFormProps } from "@/types/props/pages.types";

export default function CheckoutForm({
    addresses,
    paymentMethods,
    shippingMethods,
    lang,
    setFieldValue,
}: ICheckoutFormProps) {
    const { text } = useText();

    return (
        <div className="flex flex-col gap-10">
            <div>
                <h3 className="mb-5 text-lg leading-130 font-medium">
                    {text("Ваши данные")}
                </h3>
                <fieldset className="grid xl:grid-cols-2 grid-cols-1 gap-8 w-full">
                    <OverlapInput
                        id="checkout-name"
                        name="name"
                        placeholder={text("Имя и Фамилия")}
                    />
                    <OverlapInput
                        id="checkout-phone"
                        name="phone_number"
                        placeholder={text("Номер телефона")}
                    />
                </fieldset>
            </div>

            <CheckoutShipping shippingMethods={shippingMethods} />

            <CheckoutPayment paymentMethods={paymentMethods} />

            <CheckoutAddresses
                addresses={addresses}
                lang={lang}
                setFieldValue={setFieldValue}
            />

            <div className="flex flex-col gap-5">
                <h3 className="text-lg leading-130 font-medium">
                    {text("Сообщение")}
                </h3>

                <fieldset className="grid gap-8 w-full">
                    <OverlapInput
                        id="checkout-message"
                        name="message"
                        placeholder={text("Сообщение")}
                    />
                </fieldset>
            </div>
        </div>
    );
}
