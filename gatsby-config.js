const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Habib Sogbesan's Portfolio Site",
        short_name: "HS Portfolio",
        start_url: "/",
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: "src/images/android-chrome-512x512.png", // This path is relative to the root of the site.
      },
    },
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
    "gatsby-plugin-react-helmet",
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
