import RadioInput from "@/components/ui/formElements/RadioInput";
import { useText } from "@/context/text.context";
import { ErrorMessage } from "formik";
import AddressModal from "../../../../ui/headless/AddressModal";
import { ICheckoutAddressesProps } from "@/types/props/pages.types";
import { ICheckoutForm } from "@/types/form.types";

export default function CheckoutAddresses({
    addresses,
    locale,
    setFieldValue,
}: ICheckoutAddressesProps) {
    const { text } = useText();

    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-lg leading-130 font-medium">
                {text("Ваш адрес")}
            </h3>

            <fieldset className="flex flex-col gap-4 w-max">
                {typeof addresses !== "string" &&
                    (addresses.data.length > 0 ? (
                        addresses.data.map((address) => {
                            return (
                                <RadioInput
                                    name="address_id"
                                    title={address.address_line_1}
                                    value={String(address.id)}
                                    key={address.id}
                                />
                            );
                        })
                    ) : (
                        <p>Ничего не найдено</p>
                    ))}
                <ErrorMessage name="address_id">
                    {(msg) => <p className="pl-1 text-xs text-main">{msg}</p>}
                </ErrorMessage>
            </fieldset>

            <AddressModal<ICheckoutForm>
                type="create"
                locale={locale}
                setFieldValue={setFieldValue}
            />
        </div>
    );
}
