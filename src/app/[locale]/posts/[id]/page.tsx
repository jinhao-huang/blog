import { i18n, Locale } from "@/i18n";
import { getPost, getPosts } from "@/lib/get-contents";
import { notFound } from "next/navigation";
import ContentBody from "@/components/content-body";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Post({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  const isValidLocale = i18n.locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  unstable_setRequestLocale(locale);
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
