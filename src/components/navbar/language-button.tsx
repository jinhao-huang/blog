"use client";
import {
  Button,
  Menu,
  MenuTrigger,
  Popover,
  Item,
} from "react-aria-components";
import { FaGlobe } from "react-icons/fa";
import { usePathname, useRouter } from "next-intl/client";
import { Key } from "react";

export default function LanguageButton({
  aria_dict,
}: {
  aria_dict: { switch_language: string };
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <MenuTrigger>
      <Button
        aria-label="Menu"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
      >
        <span className="sr-only">{aria_dict.switch_language}</span>
        <FaGlobe className="h-6 w-6"></FaGlobe>
      </Button>
      <Popover>
        <Menu
          onAction={(key: Key) => {
            router.replace(pathname, { locale: String(key) });
          }}
        >
          <Item id="zh">中文</Item>
          <Item id="en">English</Item>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
