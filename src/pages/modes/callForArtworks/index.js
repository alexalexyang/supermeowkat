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
    <div>
      <p dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></p>
    </div>
  )
}

export default NoExhibition