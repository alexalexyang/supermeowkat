import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Support from "../components/support"
import SEO from "../components/seo"

export default function Artwork({ data }) {
  const post = data.markdownRemark
  const urlsData = JSON.parse(post.frontmatter.urls)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.artist}
        description={post.frontmatter.excerpt}
      />
      <div>
        <div>
          <p>Artwork will be here using {post.frontmatter.artworkURI}.</p>
        </div>
        <div>
          <ul className="artwork-list">
            <li className="artwork-list-item">
              Title: {post.frontmatter.title}
            </li>
            <li className="artwork-list-item">
              Artist: {post.frontmatter.artist}
            </li>
            <li className="artwork-list-item">
              Medium: {post.frontmatter.medium}
            </li>
            <li className="artwork-list-item">
              URLs:{" "}
              {Object.keys(urlsData).map(key => (
                <span>
                  <a href={urlsData[key]}>{key}</a>,{" "}
                </span>
              ))}
            </li>
            <li className="artwork-list-item">
              {/* PayPal: {post.frontmatter.paypal} */}
              <Support buttonText="Support the artist" />
            </li>
          </ul>
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
  query ArtworkQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        artist
        date
        urls
        medium
        artworkURI
        paypal
        excerpt
      }
    }
  }
`
