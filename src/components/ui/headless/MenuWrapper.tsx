"use client";

import { IMenuWrapperProps } from "@/types/props/ui.types";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

export default function MenuWrapper({
    menuBtn,
    menuContent,
    isOpen,
    closeModal,
}: IMenuWrapperProps) {
    return (
        <>
            {menuBtn}

            <Dialog
                open={isOpen}
                onClose={closeModal}
                className="fixed inset-0 flex w-screen items-start justify-end z-[99]">
                <DialogBackdrop className="fixed inset-0 bg-black" />

                <DialogPanel
                    transition
                    className="bg-white shadow-lg sm:w-[400px] w-full z-[1] h-full transition-300 ease-out data-[closed]:opacity-0 data-[closed]:translate-x-1/2 py-6 px-4 flex flex-col gap-[30px] justify-between overflow-y-auto">
                    {menuContent}
                </DialogPanel>
            </Dialog>
        </>
    );
}
