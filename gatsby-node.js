const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/*/*.md" } }
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

      exhibition: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/src/modes/exhibition/artists/*/*.md" }
        }
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              title
              artist
              date
            }
          }
        }
      }

      blogposts: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/blogposts/*/*.md" } }
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
        component: path.resolve("src/templates/pageTemplate.js"),
      })
    })

    res.data.exhibition.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve("src/templates/artworkTemplate.js"),
      })
    })

    res.data.blogposts.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve("src/templates/blogpostTemplate.js"),
      })
    })

    // Create paginated blog list page
    const blogposts = res.data.blogposts.edges
    paginate({
      createPage,
      items: blogposts,
      itemsPerPage: 3,
      pathPrefix: "/blog",
      component: path.resolve("src/templates/blogTemplate.js"),
    })
  })
}
