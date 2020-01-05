import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Support from "../components/support"
import SEO from "../components/seo"

export default function Page({ data }) {
  const post = data.markdownRemark

  const supportSupermeowkat = () => (
    <div>
      <div>
        <p>
          If you like Supermeowkat, please appreciate us with cold hard cash:
        </p>
      </div>
      <div className="centre">
        <Support buttonText="Support Supermeowkat" />
      </div>
    </div>
  )

  return (
    <Layout>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.excerpt}
      />
      <div
        className="md-text"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
      {data.markdownRemark.frontmatter.path === "/about"
        ? supportSupermeowkat()
        : null}
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
        excerpt
      }
    }
  }
`
