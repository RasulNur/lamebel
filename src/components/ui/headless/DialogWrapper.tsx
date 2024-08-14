"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Icon from "../Icon";
import { IDialogWrapperProps } from "@/types/props/ui.types";

export default function DialogWrapper({
    button,
    content,
    title,
    isOpen,
    setIsOpen,
    dialogClassname,
    titleClassname,
}: IDialogWrapperProps) {
    return (
        <>
            {button}

            <Dialog
                open={isOpen}
                className="fixed inset-0 flex-center w-screen z-[99]"
                onClose={() => setIsOpen(false)}>
                <DialogBackdrop className="fixed inset-0 bg-black" />

                <DialogPanel
                    transition
                    className={`relative flex flex-col gap-8 bg-white shadow-lg sm:w-[400px] h-max max-h-[400px] w-full z-[1] transition-300 ease-out data-[closed]:opacity-0 data-[closed]:translate-y-5 py-6 px-4 overflow-y-auto rounded-xl ${dialogClassname}`}>
                    <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="p-2 absolute right-2 top-4">
                        <Icon name="x" className="stroke-primary !size-3" />
                    </button>
                    <h3
                        className={`font-bold text-xl text-center ${titleClassname}`}>
                        {title}
                    </h3>

                    {content}
                </DialogPanel>
            </Dialog>
        </>
    );
}
