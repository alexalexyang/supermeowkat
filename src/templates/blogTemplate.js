import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export const blogOn = false

function Blog({ data, pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(node => (
          <div>
            <p>
              {node.node.frontmatter.featuredImage && (
                <Img
                  fixed={
                    node.node.frontmatter.featuredImage.childImageSharp.fixed
                  }
                />
              )}
            </p>
            <h2 className="blogpost-title">
              <Link to={node.node.frontmatter.path}>
                {node.node.frontmatter.title}
              </Link>
            </h2>
            <p className="blogpost-details">
              Written {node.node.frontmatter.date} by{" "}
              {node.node.frontmatter.author}
            </p>
            <p>{node.node.frontmatter.excerpt}</p>
            <br />
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
            date(formatString: "YYYY-MM-DD")
            author
            excerpt
            featuredImage {
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
