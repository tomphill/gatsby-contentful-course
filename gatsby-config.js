require("dotenv").config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `Gatsby Contentful Starter`,
        description: `Starter repo to to use with the Gatsby & Contentful course`,
        author: `@tomphill`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Potta One`,
                    `open sans\:400`,
                    "open sans:400i",
                    `open sans\:700`,
                    "open sans:700i",
                    `open sans\:800`,
                    "open sans:800i",
                ],
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                host: process.env.CONTENTFUL_HOST,
            },
        },
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
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
    ],
};
