import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./css/layout.css"
import "./css/layout_bulma.scss"
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
      <div>
        <main>{children}</main>
        <footer className="footer">
          <hr />© {new Date().getFullYear()}, built by{" "}
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
