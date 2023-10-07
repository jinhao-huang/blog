import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1BitBool's Blog",
  description: "This is 1BitBool's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
