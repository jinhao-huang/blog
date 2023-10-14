import { JSX, SVGProps } from "react";
import { FaGithub, FaRss, FaTwitter } from "react-icons/fa6";
import Link from "next-intl/link";
import { Locale } from "@/i18n";
import { siteConfig } from "@/metaConfig";

export default function Footer({ locale }: { locale: Locale }) {
  const navigations = [
    {
      name: "RSS",
      href: `${siteConfig.bashURL}/${locale}/rss.xml`,
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <FaRss {...props}></FaRss>
      ),
    },
    {
      name: "Github",
      href: "https://github.com/1bitbool",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <FaGithub {...props}></FaGithub>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/1bitbool",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <FaTwitter {...props}></FaTwitter>
      ),
    },
  ];
  return (
    <footer className="absolute bottom-0 flex h-48 w-full flex-col items-center justify-center md:h-32">
      <div className="w-full max-w-7xl px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-gray-600"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023-Present 1BitBool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
