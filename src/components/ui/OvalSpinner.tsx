import { IOvalSpinnerProps } from "@/types/props/ui.types";
import { Oval } from "react-loader-spinner";

export default function OvalSpinner({
    size,
    type = "main",
}: IOvalSpinnerProps) {
    return (
        <Oval
            visible={true}
            height={`${size}`}
            width={`${size}`}
            color={type === "main" ? "var(--main)" : "var(--white)"}
            secondaryColor="var(--placeholder)"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
}
