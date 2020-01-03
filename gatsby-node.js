const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/*.md" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              title
              author
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve("src/templates/page.js"),
      })
    })
  })
}
