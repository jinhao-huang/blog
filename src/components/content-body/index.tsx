import { MDXRemote } from "next-mdx-remote/rsc";
import { Locale } from "@/i18n";
import { PostLanguageLinks } from "./post-language-links";
import { Post } from "@/lib/content";
import { useTranslations } from "next-intl";
import { getLocalesOfPost } from "@/lib/get-contents";

export default function ContentBody({
  children,
  post,
  locale,
}: {
  children: string;
  locale?: Locale;
  post?: Post;
}) {
  return (
    <article className="prose mx-auto dark:prose-invert">
      <PostMetadata post={post} locale={locale}></PostMetadata>
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

function PostMetadata({ post, locale }: { post?: Post; locale?: Locale }) {
  const baseDict = useTranslations("Base");
  if (!post) return null;
  const locales = locale
    ? getLocalesOfPost(post.id).filter((l) => l !== locale)
    : [];

  return (
    <>
      <h1>{post.title}</h1>
      <header>
        <time dateTime={post.date.toISOString()} className="text-primary-2">
          {baseDict("date", { baseDate: post.date })}
        </time>
        {locale && <PostLanguageLinks locales={locales}></PostLanguageLinks>}
      </header>
    </>
  );
}
