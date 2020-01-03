import React from "react"
import Layout from "../../../components/layout"
import { graphql } from "gatsby"

export default function Artwork({ data }) {
  const post = data.markdownRemark

  const urlsData = JSON.parse(data.markdownRemark.frontmatter.urls)

  return (
    <Layout>
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
              PayPal: {post.frontmatter.paypal}
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

export const ArtworkQuery = graphql`
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
      }
    }
  }
`
