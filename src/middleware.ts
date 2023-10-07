import createMiddleware from "next-intl/middleware";
import { i18n } from "@/i18n";

// Middleware will be deactivated in static export
export default createMiddleware({
  locales: i18n.locales,

  defaultLocale: i18n.defaultLocale,

  localePrefix: "always",
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|assets|.*\\..*).*)"],
};
