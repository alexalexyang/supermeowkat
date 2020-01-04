import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"

export const blogOn = false

function Blog({ data, pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(node => (
          <div>
            <h2>
              <Link to={node.node.frontmatter.path}>
                {node.node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.node.frontmatter.date}</p>
            <p>{node.node.frontmatter.excerpt}</p>
            <hr />
            <br />
          </div>
        ))}

        <div>
          {previousPagePath && <Link to={previousPagePath}>Previous</Link>}{" "}
          {nextPagePath && <Link to={nextPagePath}>Next</Link>}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const blogpostsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/blogposts/*/*.md" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
            excerpt
          }
        }
      }
    }
  }
`
