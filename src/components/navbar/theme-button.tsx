"use client";
import {
  Button,
  Item,
  Menu,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { Key, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TbDeviceDesktop, TbMoonFilled, TbSunFilled } from "react-icons/tb";

export default function ThemeButton({
  dict,
  aria_dict,
}: {
  dict: {
    system: string;
    light: string;
    dark: string;
  };
  aria_dict: { switch_theme: string };
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const icon =
    theme === "light" ? (
      <TbSunFilled className="h-6 w-6"></TbSunFilled>
    ) : theme === "dark" ? (
      <TbMoonFilled className="h-6 w-6"></TbMoonFilled>
    ) : theme === "system" ? (
      <TbDeviceDesktop className="h-6 w-6"></TbDeviceDesktop>
    ) : (
      <></>
    );
  return (
    <MenuTrigger>
      <Button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300">
        <span className="sr-only">{aria_dict.switch_theme}</span>
        {icon}
      </Button>
      <Popover>
        <Menu
          onAction={(key: Key) => {
            setTheme(String(key));
          }}
        >
          <Item id="system">{dict.system}</Item>
          <Item id="light">{dict.light}</Item>
          <Item id="dark">{dict.dark}</Item>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
