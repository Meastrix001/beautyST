// next-sitemap.config.js
// const pages = ["about", "contact", "faq", "review", "services-prices", ""];
// const langs = ["est", "en"];

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.beautybystiina.ee",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  // exclude: ["/*"], // prevent auto-detection

  // additionalPaths: async (config) => {
  //   const paths = [];
  //   for (const lang of langs) {
  //     for (const page of pages) {
  //       paths.push(await config.transform(config, `/${lang}/${page}/`));
  //     }
  //   }
  //   return paths;
  // },
};