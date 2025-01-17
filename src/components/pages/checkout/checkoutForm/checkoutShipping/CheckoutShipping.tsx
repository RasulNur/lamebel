import RadioInput from "@/components/ui/formElements/RadioInput";
import { useText } from "@/context/text.context";
import { ICheckoutShippingProps } from "@/types/props/pages.types";
import { ErrorMessage } from "formik";

export default function CheckoutShipping({
    shippingMethods,
}: ICheckoutShippingProps) {
    const { text } = useText();
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-lg leading-130 font-medium">
                {text("Метод доставки")}
            </h3>
            <fieldset className="flex flex-col gap-4 w-max">
                {shippingMethods.data.map((shippingMethod) => {
                    return (
                        <RadioInput
                            name="shipping_method"
                            title={shippingMethod.name}
                            value={shippingMethod.code}
                            key={shippingMethod.id}
                        />
                    );
                })}
                <ErrorMessage name="shipping_method">
                    {(msg) => <p className="pl-1 text-xs text-main">{msg}</p>}
                </ErrorMessage>
            </fieldset>
        </div>
    );
}
