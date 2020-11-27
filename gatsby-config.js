require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

module.exports = {
  plugins: [
    {
      resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        basePath: '/',
        shopifyLite: true,
        enableWebp: true,
        imageQuality: '50',
        gatsbyImageProps: {
          loading: 'eager',
          fadeIn: false,
          durationFadeIn: 500,
        },
        manifest: {
          name: 'Immodestea',
          short_name: 'Immodestea',
          start_url: '/',
          background_color: '#fff',
          theme_color: '#333',
          display: 'standalone',
          icon: 'src/images/immodestea-min.svg',
          icon_options: {
            purpose: 'any maskable',
          },
          cache_busting_mode: 'none',
        },
      },
    },
  ],
  siteMetadata: {
    siteUrl: 'https://immodestea.com',
    gatsbyStorefrontConfig: {
      storeName: 'Immodestea',
      storeDescription: 'Immodestea',
      email: 'daniel@immodestea.com',
      company: 'Immodestea',
      location: 'Las Vegas, NV',
      address: 'Here',
      phone: '(530) 362-8437',
      workingDays: 'Everyday',
      workingHours: 'Any Time',
      socialNetworks: [
        'https://facebook.com/immodestea',
        'https://instagram.com/immodestea',
        'https://pinterest.com/immodestea',
        'https://twitter.com/immodestea',
        'https://youtube.com/immodestea',
      ],
      // Payments icons are temporarily disabled, due to large package size and negative impact on Lighthouse 6 performance.
      // Need to find an alternative package to react-payment-icons-inline.
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-141525658-5',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'Premium Cotton Masks',
              type: 'collection',
              handle: 'premium-cotton-masks',
              textColor: 'black',
              textBgColor: 'primary',
            },
            {
              name: 'Tea',
              type: 'collection',
              handle: 'tea-1',
              textColor: 'black',
              textBgColor: 'white',
            },
            {
              name: 'Teaware',
              type: 'collection',
              handle: 'teaware',
              textColor: 'white',
              textBgColor: 'primary',
            },
          ],
        },
        {
          name: 'Vegas Roasted',
          type: 'collection',
          handle: 'vegas-roast',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Red Tuilip',
          type: 'product',
          handle: 'red-tulip-quick-change-mask',
          textColor: 'black',
          textBgColor: 'primary',
        },
        {
          name: 'Gongfu Teaware',
          type: 'collection',
          handle: 'chinese-style-wares',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Matcha Espresso',
          type: 'product',
          handle: 'matcha-espresso-quick-change-mask',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Speckled White',
          type: 'product',
          handle: 'speckled-white-quick-change-mask',
          textColor: 'black',
          textBgColor: 'primary',
        },
        {
          name: 'Yixing',
          type: 'collection',
          handle: 'yixing',
          textColor: 'white',
          textBgColor: 'black',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Home",
            type: 'home',
            link: '/',
          },
          {
            name: "Teas",
            type: 'header',
            handle: 'tea-1',
            children: [
              {
                name: 'Tea',
                type: 'collection',
                handle: 'tea-1',
              },
            ],
          },
          {
            name: "Teaware",
            type: 'header',
            handle: 'teaware',
            link: '',
            children: [
              {
                name: 'Teaware',
                type: 'collection',
                handle: 'teaware',
              },
            ],
          },
          {
            name: "Masks",
            type: 'collection',
            handle: 'premium-cotton-masks',
          },
/*          { name: 'Blog', type: 'blog', handle: 'news' },*/
        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/pages/about',
        },
        {
          name: 'Terms of Service',
          link: '/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/policy/refundPolicy',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '16',
      articlesPerBlogPage: '6',
    },
  },
};
