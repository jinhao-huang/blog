import matter from "gray-matter";
import path from "path";
import fs from "fs/promises";
import { cache } from "react";
import { Locale } from "@/i18n";
import { Content, Post } from "./content";

const getContents = cache(async (locale: Locale, category?: string) => {
  const categoryPath = category ? `${category}/` : "";
  const dir = path.join(process.cwd(), `/contents/${locale}/${categoryPath}`);
  const contents = await fs.readdir(dir);
  return Promise.all(
    contents
      .filter((fileName) => path.extname(fileName) === ".mdx")
      .map(async (fileName): Promise<Content> => {
        const filePath = `${dir}${fileName}`;
        const id = fileName.replace(/\.mdx$/, "");
        const file = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(file);
        return { ...data, id: id, body: content };
      }),
  );
});

export async function getContent(locale: Locale, id: string) {
  const contents = await getContents(locale);
  return contents.find((content) => content.id === id);
}

export async function getPosts(locale: Locale) {
  const contents = (await getContents(locale, "posts")) as Post[];
  return contents.filter((post) => post.published);
}

export async function getPost(locale: Locale, id: string) {
  const posts = await getPosts(locale);
  return posts.find((post) => post.id === id);
}
