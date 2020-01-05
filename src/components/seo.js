import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image }) {
  const { site, allFile } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            author
            url
            image
            author
          }
        }

        allFile(filter: { base: { eq: "nyancat.gif" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )

  const { siteMetadata: data } = site
  const { node } = allFile.edges[0]
  console.log(node.publicURL)

  const seo = {
    title: title || data.title,
    titleTemplate: data.titleTemplate,
    description: description || data.description,
    author: data.author,
    url: data.url,
    image: image || node.publicURL,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${seo.titleTemplate}`}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: seo.author,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: `twitter:image`,
          content: seo.image,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title: ``,
  author: ``,
  url: ``,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
