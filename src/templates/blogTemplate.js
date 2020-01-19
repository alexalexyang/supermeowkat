import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

function Blog({ data, pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <Layout>
      <SEO title="Blog" description="Supermeowkat says meoooowww." />
      <div className="section">
        <div className="container">
        <h1 className="title">Blog</h1>
        </div>
        <div className="container">
        {data.allMarkdownRemark.edges.map(node => (
          <div className="bloglist-card container" key={node.node.id}>
            <div className="bloglist-blogpost-image">
              {node.node.frontmatter.featuredImage && (
                <Img
                  fixed={
                    node.node.frontmatter.featuredImage.childImageSharp.fixed
                  }
                />
              )}
            </div>
            <div className="bloglist-blogpost-details">
              <h2 className="blogpost-title subtitle">
                <Link to={node.node.fields.slug}>
                  {node.node.frontmatter.title}
                </Link>
              </h2>
              <p className="blogpost-details">
                Written{" "}
                <time dateTime={node.node.frontmatter.date}>
                  {node.node.frontmatter.date}
                </time>{" "}
                by {node.node.frontmatter.author}
              </p>
              <p className="content is-medium">{node.node.frontmatter.excerpt}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
        <div className="container">
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
          fields {
            slug
          }
          frontmatter {
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
