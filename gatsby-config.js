module.exports = {
  siteMetadata: {
    title: `안녕내집 기업소개`,
    description: `모두의 일상이 빈 틈 없이 아름답도록 안녕내집이 인테리어 문화를 선도합니다.`,
    author: `@hellomy-house`,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#ffd836`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
      {
          resolve: `gatsby-plugin-google-gtag`,
          options: {
              // You can add multiple tracking ids and a pageview event will be fired for all of them.
              trackingIds: [
                  "UA-175793950-2", // Google Analytics / GA
              ],
              pluginConfig: {
                  // Puts tracking script in the head instead of the body
                  head: true,
                  // Setting this parameter is also optional
                  respectDNT: true,
              },
          },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
