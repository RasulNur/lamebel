"use client";

import { Field, ErrorMessage, FieldProps } from "formik";
import { useState } from "react";
import Icon from "./Icon";
import classNames from "classnames";
import { IOverlapInputProps } from "@/types/props/ui.types";
import MaskedInput from "react-text-mask";

export default function OverlapInput({
    id,
    placeholder,
    inputClass,
    name,
    disabled = false,
    maxLength = 25,
    minLength = 3,
}: IOverlapInputProps) {
    const [passwordType, setPasswordType] = useState<"password" | "text">("password");

    const phoneMask = ["+", "9", "9", "8", "(", /\d/, /\d/, ")", /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/];
    const pinMask = [
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
    ];
    const expiryMask = [/\d/, /\d/, "/", /\d/, /\d/];

    return (
        <div className="overlap-input">
            {name === "phone_number" ? (
                <Field name={name}>
                    {({ field }: FieldProps) => (
                        <MaskedInput
                            mask={phoneMask}
                            {...field}
                            id={`overlap-input-${id}`}
                            type="text"
                            placeholder=""
                            disabled={disabled}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            className={inputClass}
                            autoComplete="on"
                        />
                    )}
                </Field>
            ) : name === "pin" ? (
                <Field name={name}>
                    {({ field }: FieldProps) => (
                        <MaskedInput
                            mask={pinMask}
                            {...field}
                            id={`overlap-input-${id}`}
                            type="text"
                            placeholder=""
                            disabled={disabled}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            className={inputClass}
                            autoComplete="on"
                        />
                    )}
                </Field>
            ) : name === "expiry" ? (
                <Field name={name}>
                    {({ field }: FieldProps) => (
                        <MaskedInput
                            mask={expiryMask}
                            {...field}
                            id={`overlap-input-${id}`}
                            type="text"
                            placeholder=""
                            disabled={disabled}
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                            className={inputClass}
                            autoComplete="on"
                        />
                    )}
                </Field>
            ) : name === "password" || name === "confrim_password" || name === "new_password" ? (
                <Field
                    name={name}
                    className={inputClass}
                    type={passwordType}
                    placeholder=""
                    id={`overlap-input-${id}`}
                    disabled={disabled}
                    minLength={minLength}
                    maxLength={maxLength}
                    autoComplete="on"
                />
            ) : name === "message" ? (
                <Field
                    name={name}
                    className={classNames("max-h-[250px] min-h-[100px]", inputClass)}
                    type="text"
                    placeholder=""
                    id={`overlap-input-${id}`}
                    disabled={disabled}
                    minLength={minLength}
                    maxLength={255}
                    autoComplete="on"
                    as="textarea"
                />
            ) : (
                <Field
                    name={name}
                    className={inputClass}
                    type="text"
                    placeholder=""
                    id={`overlap-input-${id}`}
                    disabled={disabled}
                    minLength={minLength}
                    maxLength={maxLength}
                    autoComplete="on"
                />
            )}

            <label htmlFor={`overlap-input-${id}`}>{placeholder}</label>
            {(name === "password" || name === "confrim_password" || name === "new_password") && (
                <button
                    onClick={() => {
                        if (passwordType == "password") setPasswordType("text");
                        else setPasswordType("password");
                    }}
                    disabled={disabled}
                    type="button"
                    className="absolute right-[10px] top-[10px] p-2">
                    <Icon className="stroke-secondary" name={passwordType === "password" ? "eye-off" : "eye"} />
                </button>
            )}
            <ErrorMessage name={name}>{(msg) => <p className="pl-1 text-xs text-red">{msg}</p>}</ErrorMessage>
        </div>
    );
}
