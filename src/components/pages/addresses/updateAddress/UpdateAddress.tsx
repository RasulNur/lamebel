import {
    createAddress,
    setDefaultAddress,
    updateAddress,
} from "@/api/addressesApi";
import { useText } from "@/context/text.context";
import useValidation from "@/hooks/useValidation";
import { Lang } from "@/types/api/api.types";
import { IAddressForm } from "@/types/form.types";
import { ISubmitFormFuncParams, SetState } from "@/types/types";
import { Form, Formik } from "formik";
import { useCookies } from "next-client-cookies";
import OverlapInput from "@/components/ui/OverlapInput";
import { useRouter } from "next/navigation";
import { IAddress } from "@/types/api/address.types";

export default function UpdateAddress({
    lang,
    setIsOpen,
    currentAddress,
}: {
    lang: Lang;
    setIsOpen: SetState<boolean>;
    currentAddress?: IAddress;
}) {
    const initialValues: IAddressForm = {
        address: currentAddress?.address_line_1 || "",
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

        if (token && currentAddress && address) {
            updateAddress({
                addressId: currentAddress.id,
                token,
                body: {
                    address_line_1: address,
                },
                lang,
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
