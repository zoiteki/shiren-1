require("dotenv").config();
const config = require("./config");
const plugins = [
  'gatsby-plugin-sitemap',

  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "docs",
      path: `${__dirname}/content/`
    }
  },
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
          },
        },
        {
          resolve: `gatsby-remark-autolink-headers`,
          options: {
            offsetY: `100`,
            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.65 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            className: `custom-class`,
            maintainCase: true,
            removeAccents: true,
            isIconAfterHeader: true,
            elements: [`h1`, `h2`, `h3`, `h4`],
          },
        },
      ],
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
];

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  trailingSlash: 'ignore', // Let our custom logic in gatsby-node.js handle trailing slashes
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: { link: config.header.logoLink ? config.header.logoLink : '/', image: config.header.logo }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins,
};
