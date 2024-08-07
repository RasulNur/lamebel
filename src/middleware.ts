import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";
import {
    NextFetchEvent,
    NextMiddleware,
    NextRequest,
    NextResponse,
} from "next/server";

function withRedirectsMiddleware(middleware: NextMiddleware) {
    return async (req: NextRequest, e: NextFetchEvent) => {
        const {
            nextUrl: { pathname },
            url,
        } = req;
        const redirectData = [
            {
                from: "/en/pages/3-o-nas",
                to: "/en/contacts",
            },
            {
                from: "/en/categories/1-smartfony-i-gadzety",
                to: "/en/categories",
            },
        ];
        console.log({ url, pathname });

        for (const item of redirectData) {
            console.log({ item });
            if (pathname === item.from) {
                console.log("done");
                return NextResponse.redirect(new URL(item.to, url), {
                    status: 301,
                });
            }
        }

        return middleware(req, e);
    };
}

function internalizationMiddleware(req: NextRequest) {
    return i18nRouter(req, i18nConfig);
}

export default withRedirectsMiddleware(internalizationMiddleware);

export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)",
};
