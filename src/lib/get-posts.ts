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
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `${dir}${file}`;
        const postContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(postContent);

        if (data.published === false) {
          return null;
        }

        return { ...data, id: file, body: content } as Post;
      })
      .filter((post) => post !== null) as Promise<Post>[],
  );
});

export async function getPost(locale: Locale, id: string) {
  const posts = await getPosts(locale);
  return posts.find((post) => post.id === id);
}

export default getPosts;
