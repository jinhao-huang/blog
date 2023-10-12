import { getRequestConfig, unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

type Translations = {
  [key in Locale]: string;
};

export const localeTranslations: Translations = {
  en: "English",
  zh: "简体中文",
};

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));

export function validateLocale(locale: string) {
  const isValidLocale = i18n.locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  unstable_setRequestLocale(locale);
}
