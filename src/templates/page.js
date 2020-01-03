import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Page({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  )
}

export const postQuery = graphql`
  query PageQuery($path: String!) {
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
