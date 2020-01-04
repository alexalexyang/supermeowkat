import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Artwork({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <div>
          <p className="blogpost-details">
            Written {post.frontmatter.date} by {post.frontmatter.author}
          </p>
        </div>
        <div
          className="md-text"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query blogpostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
      }
    }
  }
`
