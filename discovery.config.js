
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "roadrunnersportsqa",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "en-US",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "USA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://roadrunnersportsqa.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/apparel",
    search: "/s?q=Korsa",
    pdp: "/mens-korsa-long-gone-9-short-20-1000039889-024/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/mens-korsa-long-gone-9-short-20-1000039889-024/p",
      collection: "/apparel",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/mens-korsa-long-gone-9-short-20-1000039889-024/p",
      collection: "/apparel",
      collection_filtered: "/apparel/?category-1=apparel&brand=Korsa&facets=category-1%2Cbrand%27",
      search: "/s?q=Korsa",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://roadrunnersportsqa.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
