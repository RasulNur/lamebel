import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    // locales: ["ru", "uz", "en"],
    locales: ["ru", "uz"],
    defaultLocale: "ru",
    localePrefix: "as-needed",
    localeCookie: false,
    localeDetection: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
