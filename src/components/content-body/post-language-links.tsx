"use client";
import Link from "next-intl/link";
import { Locale, localeTranslations } from "@/i18n";
import { usePathname } from "next-intl/client";
import { useEffect, useState } from "react";

export function PostLanguageLinks({ locales }: { locales: Locale[] }) {
  const [mounted, setMounted] = useState(false);
  const ref = usePathname();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  if (locales.length === 0) {
    return null;
  }
  return (
    <span>
      This post is also available in other languages:{" "}
      {locales.map((locale, index) => {
        return (
          <>
            <Link key={locale} href={ref} locale={locale}>
              {localeTranslations[locale]}
            </Link>
            {index < locales.length - 1 ? ", " : null}
          </>
        );
      })}{" "}
    </span>
  );
}
