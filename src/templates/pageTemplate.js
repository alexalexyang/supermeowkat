import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SupportSupermeowkat from "../components/supportSupermeowkat"
import SEO from "../components/seo"
import Mailchimp from "../components/mailchimp"
import siteData from "../../site-config"

export default function Page({ data }) {
  const post = data.markdownRemark

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
      {data.markdownRemark.frontmatter.path === "/about" && (
        <SupportSupermeowkat />
      )}
      {data.markdownRemark.frontmatter.path === "/contact" &&
        siteData.mailchimp && <Mailchimp />}
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
