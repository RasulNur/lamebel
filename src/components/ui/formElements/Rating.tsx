import { useState } from "react";
import Icon from "../Icon";
import classNames from "classnames";
import { ErrorMessage } from "formik";
import { IRatingProps } from "@/types/props/ui.types";

export default function Rating({
    activeFillColor = "var(--main)",
    activeStrokeColor = "var(--main)",
    count = 5,
    fillColor = "none",
    strokeColor = "var(--main)",
    wrapperClassName,
    iconClassname,
    setFieldValue,
    values,
}: IRatingProps) {
    const [hover, setHover] = useState(0);
    const { rating } = values;
    const customHandleChange = (index: number) => {
        setFieldValue("rating", index);
    };

    return (
        <div>
            <div className={`flex items-center gap-1 ${wrapperClassName}`}>
                {[...Array(count)].map((_, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={
                                index <= (hover || rating) ? "on" : "off"
                            }
                            onClick={() => {
                                customHandleChange(index);
                            }}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}>
                            <Icon
                                className={classNames("size-6", iconClassname)}
                                name="star"
                                stroke={
                                    index <= (hover || rating)
                                        ? activeStrokeColor
                                        : strokeColor
                                }
                                fill={
                                    index <= (hover || rating)
                                        ? activeFillColor
                                        : fillColor
                                }
                            />
                        </button>
                    );
                })}
            </div>
            <ErrorMessage name="rating">
                {(msg) => <p className="pl-1 text-xs text-red">{msg}</p>}
            </ErrorMessage>
        </div>
    );
}
