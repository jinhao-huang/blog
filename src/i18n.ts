import { getRequestConfig } from "next-intl/server";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
