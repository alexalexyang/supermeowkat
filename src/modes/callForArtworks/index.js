import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const NoExhibition = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { mode: { eq: "callForArtworks" } }) {
        html
        frontmatter {
          mode
          title
          author
          date
        }
      }
    }
  `)

  return (
    <div className="section">
      <div className="container">
      <article
      className="md-text content is-medium"
      dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
    ></article>
      </div>
    </div>
  )
}

export default NoExhibition
