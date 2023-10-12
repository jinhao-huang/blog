import { i18n, Locale } from "@/i18n";
import { generateRSS } from "@/scripts/generate-rss";

export async function GET(
  request: Request,
  { params }: { params: { locale: Locale } },
) {
  const locale = params.locale;
  const rssContent = await generateRSS(locale);
  return new Response(rssContent, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}
