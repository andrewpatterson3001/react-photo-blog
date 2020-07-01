module.exports = {
  siteMetadata: {
    title: 'Andrew Patterson Photography',
    description: 'Check out these examples of my work'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
