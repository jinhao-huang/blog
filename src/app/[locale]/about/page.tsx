import { getContent } from "@/lib/get-contents";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n";
import ContentBody from "@/components/content-body";

export default async function About({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const content = await getContent(locale, "about");
  if (!content) notFound();
  return <ContentBody locales={[]}>{content.body}</ContentBody>;
}
