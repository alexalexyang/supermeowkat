import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NoExhibition from "./modes/noExhibition"
import CallForArtworks from "./modes/callForArtworks"

export default function IndexPage() {
  const mode = "callForArtworks"

  const runMode = () => {
    if (mode === "noExhibition") return <NoExhibition />
    if (mode === "exhibition") return "Exhibition time!"
    if (mode === "callForArtworks") return <CallForArtworks />
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div>{runMode()}</div>
    </Layout>
  )
}
