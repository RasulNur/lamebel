"use client";

import Icon from "@/components/ui/Icon";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export default function HeaderMenu({}: {}) {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="group main-btn w-max min-w-0 2xl:py-4 2xl:px-6 p-3"
                onClick={() => setIsOpen(true)}>
                <Icon
                    name="menu"
                    className="stroke-white group-hover:stroke-main"
                />
                <span className="2xl:inline-block hidden">Каталог</span>
            </button>
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="fixed inset-0 flex w-screen items-start justify-end z-[99]">
                <DialogBackdrop className="fixed inset-0 bg-black" />
                <DialogPanel
                    transition
                    className="bg-white shadow-lg sm:w-[400px] w-full z-[1] h-full transition-300 ease-out data-[closed]:opacity-0 data-[closed]:translate-x-1/2 py-6 px-4">
                    <div className="flex items-center justify-end">
                        <button
                            className="p-2 hover:opacity-60"
                            onClick={() => setIsOpen(false)}>
                            <Icon name="x" className="stroke-primary" />
                        </button>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
}
