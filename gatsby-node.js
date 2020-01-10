const siteData = require("./site-config")
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/*/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
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
            fields {
              slug
            }
          }
        }
      }

      blogposts: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/blogposts/*/*.md" } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
            fields {
              slug
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
        path: node.fields.slug,
        component: path.resolve("src/templates/artworkTemplate.js"),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    if (siteData.blog === true) {
      res.data.blogposts.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve("src/templates/blogpostTemplate.js"),
          context: {
            slug: node.fields.slug,
          },
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
    }
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === `MarkdownRemark` &&
    node.fileAbsolutePath.includes("blogposts")
  ) {
    const slug = createFilePath({ node, getNode, basePath: `src/blogposts` })
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    })
  }

  if (
    node.internal.type === `MarkdownRemark` &&
    node.fileAbsolutePath.includes("modes")
  ) {
    const slug = createFilePath({ node, getNode, basePath: `src/modes` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
