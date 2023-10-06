import { Locale } from "@/i18n";
import { getPost } from "@/lib/get-contents";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Post({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  const post = await getPost(locale, id);
  if (!post) notFound();
  return (
    <MDXRemote
      source={post.body}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }}
    />
  );
}
