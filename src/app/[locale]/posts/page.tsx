import { useTranslations } from "next-intl";
import { getPosts } from "@/lib/get-contents";
import { Locale, validateLocale } from "@/i18n";
import RelativeLink from "@/components/relative-link";

export default function Posts({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  validateLocale(locale);
  const dict = useTranslations("App.Posts");
  const baseDict = useTranslations("Base");

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
        {dict("latest_posts")}
      </h1>
      <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 dark:border-gray-700 sm:mt-16 sm:pt-16">
        <PostList locale={locale} baseDict={baseDict} />
      </div>
    </div>
  );
}

function PostList({ locale, baseDict }: { locale: Locale; baseDict: any }) {
  const posts = getPosts(locale);
  return posts.map((post) => (
    <article
      key={post.id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={post.date.toISOString()} className="text-primary-2">
          {baseDict("date", { baseDate: post.date })}
        </time>
        {post.tags.map((tag) => (
          <a
            key={tag}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-primary-2 hover:bg-gray-100 dark:bg-gray-800 hover:dark:bg-gray-900"
          >
            {tag}
          </a>
        ))}
      </div>
      <div className="group relative">
        <h2 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-primary-1">
          <RelativeLink href={post.id}>
            <span className="absolute inset-0" />
            {post.title}
          </RelativeLink>
        </h2>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-primary-1">
          {post.description}
        </p>
      </div>
    </article>
  ));
}
