import RadioInput from "@/components/ui/RadioInput";
import { useText } from "@/context/text.context";
import { IAddresses } from "@/types/api/address.types";
import { ErrorMessage, FormikErrors } from "formik";
import AddressModal from "../../../../ui/AddressModal";
import { Lang } from "@/types/api/api.types";
import { ICheckoutForm } from "@/types/form.types";

export default function CheckoutAddresses({
    addresses,
    lang,
    setFieldValue,
}: {
    addresses: IAddresses;
    lang: Lang;
    setFieldValue: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<ICheckoutForm>>;
}) {
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

            <AddressModal
                type="create"
                lang={lang}
                setFieldValue={setFieldValue}
            />
        </div>
    );
}
