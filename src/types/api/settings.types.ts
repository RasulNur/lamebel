export interface ISettings {
    title: string;
    logo: string;
    logo_light: string;
    logo_svg: string;
    logo_light_svg: string;
    email: string;
    phone: string;
    phone2: string;
    phone3: string;
    address: string;
    work_hours: string;
    map: string;
    telegram: string;
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
    tiktok: string;
    linkedin: string;
    google_analytics_code: null;
    yandex_metrika_code: null;
    facebook_pixel_code: null;
    jivochat_code: null;
    bitrix_widget_code: null;
    inweb_widget_code: null;
    click: IClick;
    paycom: {
        merchant_id: string;
    };
}

interface IClick {
    merchant_id: string;
    service_id: string;
    user_id: string;
}
