import { marked } from "marked";
import { Locale } from "@/i18n";
import { Feed } from "feed";
import { rssConfig, siteConfig } from "@/metaConfig";
import { getPosts } from "@/lib/get-contents";

export async function getRss(locale: Locale) {
  const renderer = new marked.Renderer();
  renderer.link = (href, _, text) =>
    `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  marked.setOptions({
    gfm: true,
    breaks: true,
    renderer,
  });
  const renderPost = (md: string) => marked.parse(md);

  const posts = await getPosts(locale);
  const feedOptions = rssConfig;
  feedOptions.language = locale;
  feedOptions.feed = `${siteConfig.bashURL}/${locale}/rss.xml`;
  const feed = new Feed(feedOptions);

  posts.forEach((post) => {
    const postUrl = `${siteConfig.bashURL}/${locale}/posts/${post.id}`;
    feed.addItem({
      id: postUrl,
      title: post.title,
      description: post.description,
      date: new Date(post.date),
      published: new Date(post.date),
      content: renderPost(post.body),
      link: postUrl,
    });
  });

  return feed.rss2();
}
