/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://excellencematter.net',

  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },

  // Explicitly add PDFs here
  additionalPaths: async (config) => [
    // Use exact relative paths (must match the public/ folder structure)
    { loc: '/pdfs/METAL_LOCKERS_WEC.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/Durable_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/Durable_Plus_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/WEC_Competitive_Specs_9_19_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/WEC_Athletic_Specs_9_19_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/WEC_All_Welded_Plus_Specs_9_19_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/WEC_Angle_Iron_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/PROJECT_GALLERY_WEC.pdf', priority: 0.7, changefreq: 'monthly' },
    { loc: '/pdfs/OTHER_PRODUCTS_WEC.pdf', priority: 0.6, changefreq: 'monthly' },
    // Add any more exactly like this
  ],
};

export default config;