import React from "react"
import Layout from "./src/components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"

export const blogOn = true

function Blog() {
  const blogposts = useStaticQuery(graphql`
    query blogpostsQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/blogposts/*/*.md" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 280)
            frontmatter {
              path
              title
              date
              author
            }
          }
        }
      }
    }
  `)

  console.log(blogposts)

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        {blogposts.allMarkdownRemark.edges.map(node => (
          <div>
            <h2>
              <Link to={node.node.frontmatter.path}>
                {node.node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.node.frontmatter.date}</p>
            <p>{node.node.excerpt}</p>
            <hr />
            <br />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Blog
