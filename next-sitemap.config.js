/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://excellencematter.net',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  additionalPaths: async (config) => [
    // General Resources
    { loc: '/pdfs/WEC_Catalog.pdf', priority: 0.7, changefreq: 'monthly' },
    { loc: '/pdfs/WEC_colorchart_finalcoating.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/lockerinstallation.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/Preparation_Instructions.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/Material_safety.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/WEC_Operations_and_Maintenance_Guide_10_03_19.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/General_Information.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/Assembly_Instructions.pdf', priority: 0.6, changefreq: 'monthly' },

    // Forms
    { loc: '/pdfs/SKMBT_C45110071915350.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/SKMBT_C45110071915351.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/CreditApplication.pdf', priority: 0.5, changefreq: 'yearly' },

    // Detailed and Illustrated Specifications
    { loc: '/pdfs/Durable_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/Durable_Plus_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/Athletic_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/Angle_Iron_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/All_Welded_Series.pdf', priority: 0.5, changefreq: 'monthly' },

    // Drawings
    { loc: '/pdfs/SKMBT_C45110110313201.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/SKMBT_C45110110303200.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/SKMBT_C45110110313183.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/HoodDetailModel.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/Filler_Details.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/Bench_&_Pedestal_Details.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/ZeeBaseDetailModel.pdf', priority: 0.5, changefreq: 'yearly' },

    // Textual Specifications
    { loc: '/pdfs/WEC_Durable_Specs_7_21_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/WEC_Durable_Plus_Specs_9_19_14_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/SKMBT_C45110110313WEC_Competitive_Specs_9_19_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/WEC_Athletic_Specs_9_19_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/WEC_Angle_Iron_Series.pdf', priority: 0.5, changefreq: 'monthly' },
    { loc: '/pdfs/WEC_All_Welded_Plus_Specs_9_19_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },
    { loc: '/pdfs/Fire_&_Rescue_Competitive_Specs_10_14_2014_FINAL.pdf', priority: 0.5, changefreq: 'yearly' },

    // Archived Web Pages
    { loc: '/pdfs/ABOUT_WEC.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/FAST_TRACK_STOCKING_WEC.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/GENERAL_INFORMATION_WEC.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/LATEST_UPDATES_WEC.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/METAL_LOCKERS_WEC.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/OTHER_PRODUCTS_WEC.pdf', priority: 0.6, changefreq: 'monthly' },
    { loc: '/pdfs/Privacy_Policy_WEC.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/PROJECT_GALLERY_WEC.pdf', priority: 0.7, changefreq: 'monthly' },
    { loc: '/pdfs/SERVICES_WEC.pdf', priority: 0.4, changefreq: 'yearly' },

    // Third Party Business Documentation
    { loc: '/pdfs/2024_0320-Taylor-Animal-Sidock-Project-Manaual.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/Addendum2PKG3DGPHSNewBattingCagesFacility.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/Energy-Design-Guide-for-Schools.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/July_6_2017_(Due_Date)_Invitation_to_Bid-Addendum_Number_1_(PDF).pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/kenton_co_dfp.pdf', priority: 0.4, changefreq: 'yearly' },
    { loc: '/pdfs/XII_A_5_KentonCoDFP_0.pdf', priority: 0.4, changefreq: 'yearly' },
  ],
};
export default config;