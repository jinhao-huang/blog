"use client";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";
export default function RelativeLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  return <Link href={`${pathname}/${href}`}>{children}</Link>;
}
