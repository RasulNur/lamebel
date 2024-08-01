import Icon from "@/components/ui/Icon";

export default function HeaderMenuBtn({
    openModal,
}: {
    openModal: () => void;
}) {
    return (
        <button
            className="group main-btn w-max min-w-0 2xl:py-4 2xl:px-6 p-3"
            onClick={openModal}>
            <Icon
                name="menu"
                className="stroke-white group-hover:stroke-main"
            />
            <span className="2xl:inline-block hidden">Каталог</span>
        </button>
    );
}
