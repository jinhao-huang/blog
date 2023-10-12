import { MDXRemote } from "next-mdx-remote/rsc";
import { Locale } from "@/i18n";
import { PostLanguageLinks } from "@/components/post-language-links";

export default function ContentBody({
  children,
  locales,
}: {
  children: string;
  locales: Locale[];
}) {
  return (
    <article className="prose mx-auto dark:prose-invert">
      <PostLanguageLinks locales={locales}></PostLanguageLinks>
      <MDXRemote
        source={children}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
        }}
      />
    </article>
  );
}
