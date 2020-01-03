import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = ({ siteTitle }) => {
  const { allFile: edges } = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            id
            name
            relativeDirectory
          }
        }
      }
    }
  `)

  return (
    <header>
      <div id="logo">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <div id="nav-links">
        <ul>
          {edges.edges.map(node => {
            if (
              node.node.name !== "404" &&
              node.node.name !== "index" &&
              !node.node.relativeDirectory.includes("modes")
            )
              return (
                <li key={node.node.id}>
                  <Link to={node.node.name}>{node.node.name}</Link>
                </li>
              )
          })}
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
