module.exports = {
        siteMetadata: {
          title: `Colin's Blog`,
          description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
          author: `@gatsbyjs`,
        },
        plugins: [
          `gatsby-plugin-react-helmet`,
          'gatsby-plugin-sass',
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`,
            },
          },
          {
                resolve: 'gatsby-plugin-mailchimp',
                options: {
                    endpoint: 'https://rice.us8.list-manage.com/subscribe/post?u=bad8fdcb1f4aa391b9d11815b&amp'
                }              // add your MC list endpoint here; see instructions below
          },
          
          {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
              },
            },
          `gatsby-transformer-sharp`,
          `gatsby-plugin-sharp`,
          'gatsby-plugin-catch-links',
          'gatsby-transformer-remark',
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `gatsby-starter-default`,
              short_name: `starter`,
              start_url: `/`,
              background_color: `#663399`,
              theme_color: `#663399`,
              display: `minimal-ui`,
              icon: `src/images/egg-icon.png`, // This path is relative to the root of the site.
            },
          },
          // this (optional) plugin enables Progressive Web App + Offline functionality
          // To learn more, visit: https://gatsby.dev/offline
          // `gatsby-plugin-offline`,
        ],
      }
      