import { Lang } from "../api/api.types";
import { ICategoriesTree } from "../api/categories.types";
import { ISettings } from "../api/settings.types";
import { ISingleMenu } from "../api/menus.types";

export interface IContextProvidersProps {
    children: React.ReactNode;
    lang: Lang;
}

export interface IErrorProps {
    reset: () => void;
}

export interface IHeaderProps {
    lang: Lang;
}
export interface IHeaderTopProps {
    lang: Lang;
    settings: ISettings;
    menu: ISingleMenu;
    categories: ICategoriesTree;
}
export interface IHeaderMenuProps {
    menu?: ISingleMenu;
    categories: ICategoriesTree;
    settings: ISettings;
}
export interface IHeaderMenuContentProps {
    closeModal: () => void;
    menu?: ISingleMenu;
    categories: ICategoriesTree;
    settings: ISettings;
}
export interface IHeaderListProps {
    menu: ISingleMenu;
}
export interface IHeaderIconsProps {
    lang: Lang;
}
export interface IAuthMenuProps {
    lang: Lang;
}
export interface IAuthMenuContentProps {
    closeModal: () => void;
    lang: Lang;
}

export interface IHeaderCategoriesProps {
    settings: ISettings;
}
export interface IFooterProps {
    lang: Lang;
}
export interface IFooterMenusProps {
    lang: Lang;
}
export interface IFooterListProps {
    menu: ISingleMenu;
}

export interface IMainWrapperProps {
    children: React.ReactNode;
}
