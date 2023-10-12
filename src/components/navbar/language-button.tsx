"use client";
import {
  Button,
  Menu,
  MenuTrigger,
  Popover,
  Item,
} from "react-aria-components";
import { TbWorld } from "react-icons/tb";
import { usePathname, useRouter } from "next-intl/client";
import { Key, useEffect, useState } from "react";
import { localeTranslations } from "@/i18n";

export default function LanguageButton({
  aria_dict,
}: {
  aria_dict: { switch_language: string };
}) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <MenuTrigger>
      <Button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300">
        <span className="sr-only">{aria_dict.switch_language}</span>
        <TbWorld className="h-6 w-6"></TbWorld>
      </Button>
      <Popover>
        <Menu
          onAction={(key: Key) => {
            router.replace(pathname, { locale: String(key) });
          }}
        >
          {Object.entries(localeTranslations).map(([key, language]) => (
            <Item key={key} id={key}>
              {language}
            </Item>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
