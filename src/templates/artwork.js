import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

export default function Artwork({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go back</Link>
      <hr />
      <h4>
        Posted by {post.frontmatter.author} on {post.frontmatter.date}
      </h4>
      <div
        className="md-text"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </div>
  )
}

export const postQuery = graphql`
  query ArtworkQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`
