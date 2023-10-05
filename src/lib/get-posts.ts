import matter from "gray-matter";
import path from "path";
import type { Post } from "./post";
import fs from "fs/promises";
import { cache } from "react";
import { Locale } from "@/i18n";

export const getPosts = cache(async (locale: Locale) => {
  const dir = `./posts/${locale}/`;
  const posts = await fs.readdir(dir);

  return Promise.all(
    posts
      .filter((fileName) => path.extname(fileName) === ".mdx")
      .map(async (fileName) => {
        const filePath = `${dir}${fileName}`;
        const id = fileName.replace(/\.mdx$/, "");
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, id: id, body: content } as Post;
      })
      .filter((post) => post !== null) as Promise<Post>[],
  );
});

export async function getPost(locale: Locale, id: string) {
  const posts = await getPosts(locale);
  return posts.find((post) => post.id === id);
}

export default getPosts;
