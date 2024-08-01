import Icon from "@/components/ui/Icon";

export default function HeaderMenuContent({
    closeModal,
}: {
    closeModal: () => void;
}) {
    return (
        <div className="flex items-center justify-end">
            <button className="p-2 hover:opacity-60" onClick={closeModal}>
                <Icon name="x" className="stroke-primary" />
            </button>
        </div>
    );
}
