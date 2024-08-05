"use client";

import CheckoutTotal from "./checkoutTotal/CheckoutTotal";
import CheckoutForm from "./checkoutForm/CheckoutForm";
import { Form, Formik } from "formik";
import { ICheckoutForm } from "@/types/form.types";
import { ICheckoutProps } from "@/types/props.types";
import { useCart } from "@/context/cart.context";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useText } from "@/context/text.context";
import useValidation from "@/hooks/useValidation";
import { ISubmitFormFuncParams } from "@/types/types";
import { formatPhone } from "@/utils/formatPhone";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Checkout({
    paymentMethods,
    shippingMethods,
    addresses,
    lang,
}: ICheckoutProps) {
    const initialValues: ICheckoutForm = {
        name: "",
        phone_number: "",
        payment_method: "cash",
        shipping_method: "pickup",
        address_id:
            addresses.data.length > 0
                ? addresses.data.filter((el) => el.is_default === 1).length > 0
                    ? String(
                          addresses.data.filter((el) => el.is_default === 1)[0]
                              .id,
                      )
                    : String(addresses.data[0].id)
                : "",
        message: "",
    };

    const { apiCart, cart, checkout } = useCart();
    const cookies = useCookies();
    const token = cookies.get("token");
    const { replace } = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { text } = useText();
    const { checkoutValidationSchema } = useValidation();

    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<ICheckoutForm>) => {
        const {
            message,
            name,
            payment_method,
            phone_number,
            shipping_method,
            address_id,
        } = values;

        const formattedPhone = formatPhone(phone_number);

        if (
            (token && apiCart && apiCart.quantity == 0) ||
            (!token && cart && cart.length == 0)
        ) {
            toast.error(text("В корзине пока ничего нет"));
            resetForm();
            replace("/");
        }

        const paymentMethodId = paymentMethods.data.find((el) => {
            return el.code === payment_method;
        })?.id;

        const shippingMethodId = shippingMethods.data.find((el) => {
            return el.code === shipping_method;
        })?.id;

        if (token && paymentMethodId && shippingMethodId && address_id) {
            checkout({
                body: {
                    name,
                    phone_number: formattedPhone,
                    message,
                    payment_method_id: Number(paymentMethodId),
                    shipping_method_id: Number(shippingMethodId),
                    address_id: Number(address_id),
                },

                // setIsLoading,
            });

            resetForm();
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={checkoutValidationSchema}
            onSubmit={(values, { resetForm }) =>
                handleSubmit({ values, resetForm })
            }>
            {({ isSubmitting, setFieldValue }) => (
                <Form className="grid lg:grid-cols-[1fr,400px] gap-10">
                    <CheckoutForm
                        lang={lang}
                        addresses={addresses}
                        paymentMethods={paymentMethods}
                        shippingMethods={shippingMethods}
                        setFieldValue={setFieldValue}
                    />
                    <CheckoutTotal isSubmitting={isSubmitting} />
                </Form>
            )}
        </Formik>
    );
}
