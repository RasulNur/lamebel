import RadioInput from "@/components/ui/RadioInput";
import { useText } from "@/context/text.context";
import { ICheckoutPaymentProps } from "@/types/props.types";
import { ErrorMessage } from "formik";

export default function CheckoutPayment({
    paymentMethods,
}: ICheckoutPaymentProps) {
    const { text } = useText();
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-lg leading-130 font-medium">
                {text("Метод оплаты")}
            </h3>

            <fieldset className="flex flex-col gap-4 w-max">
                {paymentMethods.data.map((paymentMethod) => {
                    return (
                        <RadioInput
                            name="payment_method"
                            title={paymentMethod.name}
                            value={paymentMethod.code}
                            key={paymentMethod.id}
                        />
                    );
                })}
                <ErrorMessage name="payment_method">
                    {(msg) => <p className="pl-1 text-xs text-main">{msg}</p>}
                </ErrorMessage>
            </fieldset>
        </div>
    );
}
