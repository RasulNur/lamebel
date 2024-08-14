import { createAddress, setDefaultAddress } from "@/api/addressesApi";
import { useText } from "@/context/text.context";
import useValidation from "@/hooks/useValidation";
import { IAddressForm } from "@/types/form.types";
import { ISubmitFormFuncParams } from "@/types/types";
import { Form, Formik } from "formik";
import { useCookies } from "next-client-cookies";
import OverlapInput from "@/components/ui/OverlapInput";
import { useRouter } from "next/navigation";
import { ICreateAddressProps } from "@/types/props/pages.types";

export default function CreateAddress({
    lang,
    setIsOpen,
    setFieldValue,
}: ICreateAddressProps) {
    const initialValues: IAddressForm = {
        address: "",
    };
    const cookies = useCookies();
    const token = cookies.get("token");
    const { text } = useText();
    const { refresh } = useRouter();
    const { addressValidationSchema } = useValidation();

    const handleSubmit = ({ values }: ISubmitFormFuncParams<IAddressForm>) => {
        const { address } = values;

        if (token && address) {
            createAddress({
                token,
                body: {
                    address_line_1: address,
                },
                lang,
            }).then((data) => {
                setFieldValue &&
                    setFieldValue("address_id", String(data.data.id));
                setDefaultAddress({
                    addressId: data.data.id,
                    token,
                    lang,
                }).then(() => {
                    refresh();
                    setIsOpen(false);
                });
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
                            placeholder="Новый адрес"
                            maxLength={50000}
                        />
                    </fieldset>

                    <button type="submit" className="main-btn w-full">
                        Создать
                    </button>
                </Form>
            )}
        </Formik>
    );
}
