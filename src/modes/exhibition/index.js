import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import SupportSupermeowkat from "../../components/supportSupermeowkat"
import Img from "gatsby-image"

export default function Exhibition() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { eq: "md" }
          relativePath: { regex: "/exhibition/artists/" }
        }
      ) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                artist
                artworkURI {
                  base
                }
                featuredImage {
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
                excerpt
                medium
                paypal
                title
                urls
              }
              html
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">Example exhibition</h1>
          <p className="content is-medium">Exhibition text here.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">The artworks</h1>
          {data.allFile.edges.map(node => (
            <article className="artwork exhibition-preview-image container" key={node.node.childMarkdownRemark.fields.slug}>
              <div>
                <Img
                  fluid={
                    node.node.childMarkdownRemark.frontmatter.featuredImage
                      .childImageSharp.fluid
                  }
                />
              </div>
              <div className="artwork-details content is-medium">
                <ul className="artwork-list">
                  <li className="artwork-list-item">
                    <Link to={node.node.childMarkdownRemark.fields.slug}>
                      Title: {node.node.childMarkdownRemark.frontmatter.title}
                    </Link>
                  </li>
                  <li className="artwork-list-item">
                    Medium: {node.node.childMarkdownRemark.frontmatter.medium}
                  </li>
                  <li className="artwork-list-item">
                    Artist: {node.node.childMarkdownRemark.frontmatter.artist}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SupportSupermeowkat />
    </div>
  )
}
