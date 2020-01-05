import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Support from "../../components/support"

export default function Exhibition() {
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

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { mode: { eq: "exhibition" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              artist
              medium
              artworkURI
              path
            }
            html
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
        {data.allMarkdownRemark.edges.map(node => (
          <div>
            <div>
              <p>
                Artwork thumbnail will be here using{" "}
                {node.node.frontmatter.artworkURI}.
              </p>
            </div>
            <div>
              <p>
                <Link to={node.node.frontmatter.path}>
                  {node.node.frontmatter.artworkURI}
                </Link>
              </p>
              <ul className="artwork-list">
                <li className="artwork-list-item">
                  Title: {node.node.frontmatter.title}
                </li>
                <li className="artwork-list-item">
                  Medium: {node.node.frontmatter.medium}
                </li>
                <li className="artwork-list-item">
                  Artist: {node.node.frontmatter.artist}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {supportSupermeowkat()}
    </div>
  )
}
