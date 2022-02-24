const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-dark-mode",
    // {
    //   resolve: "gatsby-source-fireimage",
    //   options: {
    //     credential: require("./firebase-creds.json"),
    //     appConfig: {
    //       databaseURL: "portfolio-website-42916.nam5.firebaseio.com",
    //     },
    //     collection: "images",
    //   },
    // },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "fireImage", // Created Node type name
        imagePath: "imgUrl", // The image url name in test node type
      },
    },
  ],
};
