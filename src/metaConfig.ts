import { FeedOptions } from "feed";

export const siteConfig = {
  bashURL: "https://blog.1bitbool.com",
};

export const rssConfig: FeedOptions = {
  id: siteConfig.bashURL,
  title: "1BitBool's Blog",
  description: "1BitBool's Blog",
  link: siteConfig.bashURL,
  author: {
    name: "1BitBool",
    email: "1bitbool@1bitbool.com",
    link: siteConfig.bashURL,
  },
  copyright: "2023-Present 1BitBool. All rights reserved.",
  docs: "https://www.rssboard.org/rss-specification",
  image: `${siteConfig.bashURL}/assets/logo.png`,
  updated: new Date(),
};
