import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export default function Blogpost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt}
      />
      <div className="section">
        <div className="container">
          <p className="blogpost-details content">
            Written <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time> by {post.frontmatter.author}
          </p>
        </div>
        <div className="container">
          <article 
          className="md-text container content is-medium"
        dangerouslySetInnerHTML={{ __html: post.html }}>
          </article>
          </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
        excerpt
      }
    }
  }
`
