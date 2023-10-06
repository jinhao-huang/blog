import { JSX, SVGProps } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa6";
import Link from "next-intl/link";

const navigation = [
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

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 w-full absolute bottom-0">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
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
