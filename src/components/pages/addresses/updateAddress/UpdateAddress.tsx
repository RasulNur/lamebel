import { updateAddress } from "@/api/addressesApi";
import { useText } from "@/context/text.context";
import useFormValidation from "@/hooks/useFormValidation";
import { IAddressForm } from "@/types/form.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { Form, Formik } from "formik";
import { useCookies } from "next-client-cookies";
import OverlapInput from "@/components/ui/OverlapInput";
import { IUpdateAddressProps } from "@/types/props/pages.types";
import { useRouter } from "@/i18n/routing";

export default function UpdateAddress({
    locale,
    setIsOpen,
    currentAddress,
}: IUpdateAddressProps) {
    const initialValues: IAddressForm = {
        address: currentAddress?.address_line_1 || "",
    };
    const cookies = useCookies();
    const token = cookies.get("token");
    const { text } = useText();
    const { refresh } = useRouter();
    const { addressValidationSchema } = useFormValidation();

    const handleSubmit = ({ values }: ISubmitFormFuncParams<IAddressForm>) => {
        const { address } = values;

        if (token && currentAddress && address) {
            updateAddress({
                addressId: currentAddress.id,
                token,
                body: {
                    address_line_1: address,
                },
                locale,
            }).then(() => {
                refresh();
                setIsOpen(false);
            });
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={addressValidationSchema}
            onSubmit={(values, { resetForm }) =>
                handleSubmit({ values, resetForm })
            }>
            {() => (
                <Form className="flex flex-col gap-10">
                    <fieldset>
                        <OverlapInput
                            id="create-address-input"
                            name="address"
                            placeholder="Изменить адрес"
                            maxLength={50000}
                        />
                    </fieldset>

                    <button type="submit" className="main-btn w-full">
                        {text("Изменить")}
                    </button>
                </Form>
            )}
        </Formik>
    );
}
