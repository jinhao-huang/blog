import { Locale, validateLocale } from "@/i18n";
import { getPost, getPosts } from "@/lib/get-contents";
import { notFound } from "next/navigation";
import ContentBody from "@/components/content-body";

export default async function Post({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  validateLocale(locale);
  const post = await getPost(locale, id);
  if (!post) notFound();
  return <ContentBody>{post.body}</ContentBody>;
}

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  const post = await getPost(locale, id);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const posts = await getPosts(locale);
  return posts.map((post) => ({ id: post.id }));
}
