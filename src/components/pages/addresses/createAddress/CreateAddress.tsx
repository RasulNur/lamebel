import { createAddress, setDefaultAddress } from "@/api/addressesApi";
import { useText } from "@/context/text.context";
import useValidation from "@/hooks/useValidation";
import { Lang } from "@/types/api/api.types";
import { IAddressForm, ICheckoutForm } from "@/types/form.types";
import { ISubmitFormFuncParams, SetState } from "@/types/types";
import { Form, Formik, FormikErrors } from "formik";
import { useCookies } from "next-client-cookies";
import OverlapInput from "@/components/ui/OverlapInput";
import { useRouter } from "next/navigation";

export default function CreateAddress({
    lang,
    setIsOpen,
    setFieldValue,
}: {
    lang: Lang;
    setIsOpen: SetState<boolean>;
    setFieldValue?: (
        field: string,
        value: any,
        shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<ICheckoutForm>>;
}) {
    const initialValues: IAddressForm = {
        address: "",
    };
    const cookies = useCookies();
    const token = cookies.get("token");
    const { text } = useText();
    const { refresh } = useRouter();
    const { addressValidationSchema } = useValidation();

    const handleSubmit = ({
        values,
        resetForm,
    }: ISubmitFormFuncParams<IAddressForm>) => {
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
