import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { PayPalScript, PayPalButtons } from "../components/paypal"

export default function Artwork({ data }) {
  useEffect(() => PayPalScript(), [])

  const [showSupport, setShowSupport] = useState(false)
  const [amount, setAmount] = useState(0)
  const [supported, setSupported] = useState(false)

  const support = () => {
    return showSupport ? quantity() : supportButton()
  }

  const supportButton = () => {
    return (
      <button id="support" onClick={() => setShowSupport(true)}>
        Support the artist
      </button>
    )
  }

  const quantity = () => {
    return (
      <form id="appreciationForm" onSubmit={loadPayPal}>
        Amount of appreciation:{" "}
        <input
          type="number"
          name="quantity"
          onChange={e => setAmount(e.target.value)}
        />
        <button type="submit">PayPal</button>
      </form>
    )
  }

  const loadPayPal = e => {
    e.preventDefault()
    let form = document.getElementById("appreciationForm")
    form.remove()
    PayPalButtons(amount, setSupported)
    return supported ? removePayPal() : null
  }

  const removePayPal = () => {
    let paypal = document.getElementById("paypal-button-container")
    paypal.remove()
  }

  const post = data.markdownRemark

  const urlsData = JSON.parse(post.frontmatter.urls)

  return (
    <Layout>
      <div>
        <div>
          <p>Artwork will be here using {post.frontmatter.artworkURI}.</p>
        </div>
        <div>
          <ul className="artwork-list">
            <li className="artwork-list-item">
              Title: {post.frontmatter.title}
            </li>
            <li className="artwork-list-item">
              Artist: {post.frontmatter.artist}
            </li>
            <li className="artwork-list-item">
              Medium: {post.frontmatter.medium}
            </li>
            <li className="artwork-list-item">
              URLs:{" "}
              {Object.keys(urlsData).map(key => (
                <span>
                  <a href={urlsData[key]}>{key}</a>,{" "}
                </span>
              ))}
            </li>
            <li className="artwork-list-item">
              <div className="container" id="paypal-button-container"></div>
              {/* PayPal: {post.frontmatter.paypal} */}
              {support()}
            </li>
          </ul>
          <div id="support-container">
            {supported ? (
              <p>
                Thank you for your support.{" "}
                <svg
                  className="thanks"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 28 28"
                >
                  <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                </svg>
              </p>
            ) : null}
          </div>
        </div>
        <div
          className="md-text"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ArtworkQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        artist
        date
        urls
        medium
        artworkURI
        paypal
      }
    }
  }
`
