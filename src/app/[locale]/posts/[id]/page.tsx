import { Locale } from "@/i18n";
import { getPost } from "@/lib/get-contents";
import { notFound } from "next/navigation";
import ContentBody from "@/components/content-body";

export default async function Post({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  const post = await getPost(locale, id);
  if (!post) notFound();
  return <ContentBody>{post.body}</ContentBody>;
}
