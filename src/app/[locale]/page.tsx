import { useTranslations } from "next-intl";
import { TbArticle, TbUser } from "react-icons/tb";
import { Locale, validateLocale } from "@/i18n";
import Link from "next-intl/link";
import { IconType } from "react-icons";

export default function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  validateLocale(locale);
  const dict = useTranslations("App");
  const pages = [
    {
      title: dict("pages.posts.title"),
      description: dict("pages.posts.description"),
      href: "/posts",
      icon: TbArticle,
      iconForeground: "text-teal-700 dark:text-teal-400",
      iconBackground: "bg-teal-50 dark:bg-teal-900",
    },
    {
      title: dict("pages.about.title"),
      description: dict("pages.about.description"),
      href: "/about",
      icon: TbUser,
      iconForeground: "text-purple-700 dark:text-purple-400",
      iconBackground: "bg-purple-50 dark:bg-purple-900",
    },
  ];
  return (
    <>
      <article className="prose pb-6 dark:prose-invert">
        <p>{dict("welcome")}</p>
        <p>{dict("prompt")}</p>
      </article>
      <PageCard pages={pages}></PageCard>
    </>
  );
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function PageCard({
  pages,
}: {
  pages: {
    title: string;
    description: string;
    href: string;
    icon: IconType;
    iconForeground: string;
    iconBackground: string;
  }[];
}) {
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow dark:divide-gray-700 dark:bg-gray-700 dark:outline dark:outline-gray-700 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {pages.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === pages.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === pages.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "group relative bg-primary-base p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 dark:focus-within:ring-indigo-400",
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "inline-flex rounded-lg p-3 ring-4 ring-primary-base",
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-primary">
              <Link href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-primary-2">{action.description}</p>
          </div>
          <span
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-500 dark:text-gray-600 dark:group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
