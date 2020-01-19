import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import siteData from "../../site-config"

const Header = ({ siteTitle }) => {
  const { allFile } = useStaticQuery(graphql`
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

  const openBurger = () => {
    const burger = document.getElementById("navbar-burger")
    burger.classList.toggle("is-active")
    const navbarMenu = document.getElementById("navbar-menu")
    navbarMenu.classList.toggle("is-active")
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="navbar-brand" id="logo">
        <Link className="navbar-item" to="/">
          <svg
            className="rotateMe"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M14.872 17.711c-.29.54-1.002.918-1.729.918-.447 0-.849-.147-1.15-.416-.301.269-.704.416-1.149.416-.729 0-1.44-.378-1.73-.918-.309-.576.536-1.14.94-.424.102.181.432.375.761.375.692 0 .631-.738.631-1.3-.423-.211-.717-.63-.717-1.006 0-.527.57-.762 1.271-.762s1.271.235 1.271.762c0 .38-.299.805-.73 1.014 0 .587-.056 1.254.599 1.254.341 0 .729-.208.863-.393.45-.624 1.185-.106.869.48zm.128-6.211c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.833-.822-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm-6-2.667c-.46 0-.834.374-.834.834 0 .459.374.833.834.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.834-.822-1.834-1.833 0-1.012.823-1.834 1.834-1.834 1.011 0 1.833.822 1.833 1.834 0 1.011-.822 1.833-1.833 1.833zm12.113 3.986c-.78-7.61-2.462-11.289-4.568-13.869-1.21 1.055-2.044 1.769-3.321 3.667-.74-.121-1.769-.119-2.486.006-1.538-1.838-2.574-2.676-3.813-3.654-2.037 2.484-3.503 6.137-4.117 13.723-1.14-1.732-1.808-3.801-1.808-6.026 0-6.065 4.934-11 11-11 6.065 0 11 4.935 11 11 0 2.277-.696 4.396-1.887 6.153zm-9.113 4.847c-3.298 0-6.254-1.466-8.272-3.772.304-4.521 1.094-10.361 3.357-13.517 1.728 1.421 2.717 2.682 3.276 3.359.748-.19 1.823-.358 3.316.007.96-1.452 1.508-2.222 2.74-3.347 1.989 2.717 3.26 7.267 3.8 13.558-2.017 2.271-4.949 3.712-8.217 3.712zm0-23c-6.623 0-12 5.377-12 12 0 6.627 5.4 12 12 12 6.559 0 12-5.33 12-12 0-6.623-5.377-12-12-12z" />
          </svg>
        </Link>
        <a
          id="navbar-burger"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
          onClick={() => openBurger()}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbar-menu" className="navbar-menu">
        <div className="navbar-end">
          {allFile.edges.map(node => {
            if (
              node.node.name !== "404" &&
              node.node.name !== "index" &&
              node.node.name !== "blog"
            ) {
              let item = node.node.name
              const itemCapitalised =
                item.charAt(0).toUpperCase() + item.slice(1)
              return (
                <Link
                  className="navbar-item"
                  key={node.node.id}
                  to={`/${node.node.name}`}
                >
                  {itemCapitalised}
                </Link>
              )
            }
            return null
          })}
          {siteData.blog ? (
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
