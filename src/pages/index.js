import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NoExhibition from "./modes/noExhibition"
import CallForArtworks from "./modes/callForArtworks"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {/* <NoExhibition /> */}
        {/* <Exhibition /> */}
        <CallForArtworks />
      </div>
    </Layout>
  )
}
