import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Support from "../components/support"
import SEO from "../components/seo"
import Video from "./video"
import ReactShare from "../components/reactShare"

export default function Artwork({ data }) {
  const artwork = data.markdownRemark
  const images = data.allFile
  const urlsData = JSON.parse(artwork.frontmatter.urls)

  const getImage = () => {
    const image = images.edges.find(
      node => node.node.base === artwork.frontmatter.artworkURI.base
    )
    return <Img fluid={image.node.childImageSharp.fluid} />
  }

  return (
    <Layout>
      <SEO
        title={artwork.frontmatter.artist}
        description={artwork.frontmatter.excerpt}
      />
      <div>
        <section className="artwork section">
          <div className="container">
          {artwork.frontmatter.medium === "image" && getImage()}
          {artwork.frontmatter.medium === "video" && (
            <div className="video-container">
              <Video
                title={artwork.frontmatter.title}
                src={artwork.frontmatter.artworkURI.base}
              />
            </div>
          )}
          </div>
        </section>

        <section className="artwork-details section">
        <div className="container content is-medium">
          <ul className="artwork-list">
            <li className="artwork-list-item">
              Title: {artwork.frontmatter.title}
            </li>
            <li className="artwork-list-item">
              Artist: {artwork.frontmatter.artist}
            </li>
            <li className="artwork-list-item">
              Medium: {artwork.frontmatter.medium}
            </li>
            <li className="artwork-list-item">
              URLs:{" "}
              {Object.keys(urlsData).map(key => (
                <span key={key}>
                  <a href={urlsData[key]}>{key}</a>,{" "}
                </span>
              ))}
            </li>
            <li className="artwork-list-item">
              {/* PayPal: {artwork.frontmatter.paypal} */}
              <div className="paypal">
                <Support buttonText="Support the artist" />
              </div>
              <div className="react-share-container">
                <ReactShare
                  title={artwork.frontmatter.title}
                  description={artwork.frontmatter.excerpt}
                  image={artwork.frontmatter.featuredImage.publicURL}
                />
              </div>
            </li>
          </ul>
          </div>
        </section>
        <section className="md-text section">
          <div className="container">
            <article 
            className="content is-medium" 
            dangerouslySetInnerHTML={{ __html: artwork.html }}>
              </article>
              </div>
              </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ArtworkQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        artist
        urls
        medium
        artworkURI {
          base
        }
        featuredImage {
          publicURL
        }
        paypal
        excerpt
      }
    }

    allFile(
      filter: {
        extension: { regex: "/jpeg|jpg|png|gif/" }
        relativePath: { regex: "/exhibition/artists/" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
