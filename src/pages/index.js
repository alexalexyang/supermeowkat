import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NoExhibition from "./modes/noExhibition"
import CallForArtworks from "./modes/callForArtworks"

export default function IndexPage() {
  const mode = "noExhibition"
  // const mode = "exhibition"
  // const mode = "callForArtworks"

  // const runMode = () => {
  //   if (mode === "noExhibition") return <NoExhibition />
  //   if (mode === "exhibition") return "Exhibition time!"
  //   if (mode === "callForArtworks") return <CallForArtworks />
  // }

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {mode === "noExhibition" ? <NoExhibition /> : null}
        {mode === "exhibition" ? "Exhibition time!" : null}
        {mode === "callForArtworks" ? <CallForArtworks /> : null}
      </div>
    </Layout>
  )
}
