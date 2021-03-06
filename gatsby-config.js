const glob = require("glob");
const sharp = require("sharp");
const deasync = require("deasync");
const icon = glob
  .sync("src/images/**/*.png")
  .filter(f => /\d{4}\/\d{2}\/\d{2}\.png/.test(f))
  .slice(-1)[0];

deasync(
  sharp(icon)
    .resize(512, 512)
    .toFile("src/images/icon.png")
);

module.exports = {
  siteMetadata: {
    title: `sketchbook.arlo.me`,
    description: `Experiments with generative art`,
    author: `@arlodesign`,
    siteUrl: "https://sketchbook.arlo.me",
    sketchesPerIndexPage: 12,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sketches`,
        path: `${__dirname}/src/pages/sketch`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sketchbook`,
        short_name: `sketchbook`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `minimal-ui`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-client-side-redirect`,
    `gatsby-plugin-emotion`,
  ],
  pathPrefix: `/assets`,
};
