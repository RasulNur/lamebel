import { Locale } from "../api/api.types";
import { ICategoriesTree } from "../api/categories.types";
import { ISettings } from "../api/settings.types";
import { ISingleMenu } from "../api/menus.types";

export interface IContextProvidersProps {
    children: React.ReactNode;
    locale: Locale;
}

export interface IErrorProps {
    reset: () => void;
}

export interface IHeaderProps {
    locale: Locale;
}
export interface IHeaderTopProps {
    locale: Locale;
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
    locale: Locale;
}
export interface IAuthMenuProps {
    locale: Locale;
}
export interface IAuthMenuContentProps {
    closeModal: () => void;
    locale: Locale;
}

export interface IHeaderCategoriesProps {
    settings: ISettings;
}
export interface IFooterProps {
    locale: Locale;
}
export interface IFooterMenusProps {
    locale: Locale;
}
export interface IFooterListProps {
    menu: ISingleMenu;
}

export interface IMainWrapperProps {
    children: React.ReactNode;
}
