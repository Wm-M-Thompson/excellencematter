/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://excellencematter.net',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}

export default config