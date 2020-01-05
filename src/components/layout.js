import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { PayPalScript } from "./paypal"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Layout = ({ children }) => {
  useEffect(() => PayPalScript(), [])

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <br />
        <br />
        <br />
        <br />
        <footer>
          <hr />© {new Date().getFullYear()}, built by{" "}
          {/* <a href="https://github.com/alexalexyang">Alex</a>. */}
          <OutboundLink href="https://github.com/alexalexyang">
            Alex
          </OutboundLink>
          . Site repo on{" "}
          <a href="https://github.com/alexalexyang/supermeowkat">GitHub</a>.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
