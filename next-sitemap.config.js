/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://excellencematter.net',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};