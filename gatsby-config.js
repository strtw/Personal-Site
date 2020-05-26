/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [`gatsby-plugin-postcss`,`gatsby-plugin-sharp`, {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images/`,
    },
  }, `gatsby-transformer-sharp`,`gatsby-plugin-styled-components`],
  siteMetadata: {
    title: "Stu Wood - Front-end Developer",
    description:
      "San Diego, CA based front-end JavaScript engineer. Analytics | Data Viz | User Interface Development | Application Development | React",
    url: "https://www.stu-wood.com", // No trailing slash allowed!
    image: "/preview-image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@stuart_wood",
    author:'@stuart_wood'
  }
}