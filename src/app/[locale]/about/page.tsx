import { getContent } from "@/lib/get-contents";
import { notFound } from "next/navigation";
import { Locale } from "@/i18n";
import ContentBody from "@/components/content-body";

export default function About({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const content = getContent(locale, "about");
  if (!content) notFound();
  return <ContentBody>{content.body}</ContentBody>;
}
