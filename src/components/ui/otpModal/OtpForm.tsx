import { sendOtp } from "@/api/authApi";
import VerificationInput from "react-verification-input";
import { IOtpFormProps } from "@/types/props.types";
import { formatPhone } from "@/utils/formatPhone";
import { useText } from "@/context/text.context";

export default function OtpForm({
    handleSubmit,
    otp,
    setOtp,
    formPhone,
    lang,
}: IOtpFormProps) {
    const { text } = useText();
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4">
            <VerificationInput
                autoFocus={true}
                validChars="0-9"
                value={otp}
                onChange={(value) => setOtp(value)}
                classNames={{
                    characterSelected: "text-primary outline-main",
                    character: "text-primary rounded-[4px]",
                    characterInactive: "bg-gray4 text-primary",
                }}
            />

            <div className="text-sm leading-24">
                <span>Ошибка? </span>
                <button
                    onClick={() => {
                        sendOtp({
                            lang,
                            body: {
                                phone_number: formatPhone(formPhone),
                            },
                        });
                    }}
                    type="button"
                    className="font-medium hover:text-main transition-300 underline">
                    Отправить снова
                </button>
            </div>
            <button className="main-btn w-full" type="submit">
                {text("Отправить")}
            </button>
        </form>
    );
}
