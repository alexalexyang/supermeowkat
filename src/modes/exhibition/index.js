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
      <h1>Example exhibition</h1>
      <div>
        <p>Exhibition text here.</p>
      </div>
      <div>
        <h1>The artworks</h1>
        {data.allFile.edges.map(node => (
          <div>
            <div className="artwork">
              <Img
                fluid={
                  node.node.childMarkdownRemark.frontmatter.featuredImage
                    .childImageSharp.fluid
                }
              />
            </div>
            <div className="artwork-details">
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
          </div>
        ))}
      </div>
      <SupportSupermeowkat />
    </div>
  )
}
