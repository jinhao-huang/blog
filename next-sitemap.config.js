/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://blog.1bitbool.com",
  output: "export",
  generateRobotsTxt: true,
};
