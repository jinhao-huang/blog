import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { cache } from "react";
import { i18n, Locale } from "@/i18n";
import { Content, Post } from "./content";

const getContents = cache((locale: Locale, category?: string) => {
  const categoryPath = category ? `${category}/` : "";
  const dir = path.join(process.cwd(), `/contents/${locale}/${categoryPath}`);
  const contents = fs.readdirSync(dir);
  return contents
    .filter(
      (fileName) =>
        path.extname(fileName) === ".mdx" || path.extname(fileName) === ".md",
    )
    .map((fileName): Content => {
      const filePath = `${dir}${fileName}`;
      const id = fileName.replace(/\.mdx$/, "").replace(/\.md$/, "");
      const file = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(file);
      return { ...data, id: id, body: content };
    });
});

export function getContent(locale: Locale, id: string) {
  const contents = getContents(locale);
  return contents.find((content) => content.id === id);
}

export function getPosts(locale: Locale) {
  const contents = getContents(locale, "posts") as Post[];
  return contents
    .filter((post) => post.published)
    .sort((a, b) => {
      return b.date.getTime() - a.date.getTime();
    });
}

export function getPost(locale: Locale, id: string) {
  const posts = getPosts(locale);
  return posts.find((post) => post.id === id);
}

export function getLocalesOfPost(id: string) {
  let locales: Locale[] = [];
  for (const locale of i18n.locales) {
    const post = getPost(locale, id);
    if (post) {
      locales.push(locale);
    }
  }
  return locales;
}
