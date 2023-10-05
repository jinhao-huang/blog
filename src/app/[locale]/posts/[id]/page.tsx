import { Locale } from "@/i18n";
import { getPost } from "@/lib/get-posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Post({
  params: { locale, id },
}: {
  params: { locale: Locale; id: string };
}) {
  const post = await getPost(locale, id);
  if (!post) notFound();
  return <PostBody>{post.body}</PostBody>;
}

export function PostBody({ children }: { children: string }) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }}
    />
  );
}
