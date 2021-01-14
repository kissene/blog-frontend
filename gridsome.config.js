// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'GridsomeBlog',
  templates: {
    // StrapiBlog: '/blog-details/:id',
    project: '/project-details/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['page', 'blog', 'new'],
        singleTypes: ['configuration', 'master'],
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ReadeMe',
        path: './content/blog/**/*.md',
      }
    }
  ],
}
