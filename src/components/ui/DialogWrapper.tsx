"use client";

import { SetState } from "@/types/types";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function DialogWrapper({
    button,
    content,
    title,
    isOpen,
    setIsOpen,
}: {
    button: React.ReactNode;
    content: React.ReactNode;
    title: string;
    setIsOpen: SetState<boolean>;
    isOpen: boolean;
}) {
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
                    className="flex flex-col gap-8 bg-white shadow-lg sm:w-[400px] h-max w-full z-[1] transition-300 ease-out data-[closed]:opacity-0 data-[closed]:translate-x-1/2 py-6 px-4 overflow-y-auto">
                    <h3 className="font-bold text-xl text-center">{title}</h3>

                    {content}
                </DialogPanel>
            </Dialog>
        </>
    );
}
