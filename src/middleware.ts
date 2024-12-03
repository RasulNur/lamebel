import {
    NextFetchEvent,
    NextMiddleware,
    NextRequest,
    NextResponse,
} from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

function withRedirectsMiddleware(middleware: NextMiddleware) {
    return async (req: NextRequest, e: NextFetchEvent) => {
        const {
            nextUrl: { pathname },
            url,
        } = req;

        const data = await fetch(`${process.env.API}settings`, {
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then((response) => {
            return response.json();
        });

        const redirectData = [
            {
                from: "/en/pages/3-o-nas",
                to: "/en/contacts",
            },
        ];

        for (const item of redirectData) {
            if (pathname === item.from) {
                return NextResponse.redirect(new URL(item.to, url), {
                    status: 301,
                });
            }
        }

        return middleware(req, e);
    };
}

// function internalizationMiddleware(req: NextRequest) {
//     return i18nRouter(req, i18nConfig);
// }

// export default withRedirectsMiddleware(internalizationMiddleware);
export default withRedirectsMiddleware(createMiddleware(routing));

export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)",
};
