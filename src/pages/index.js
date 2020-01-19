import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NoExhibition from "../modes/noExhibition"
import Exhibition from "../modes/exhibition"
import CallForArtworks from "../modes/callForArtworks"
import siteData from "../../site-config"
import Webdev from "../atelier/webdev/webdev"

export default function IndexPage() {
  return (
    <Layout>
      {siteData.noExhibition && <SEO title="Home" />}
      {siteData.exhibition && (
        <SEO
          title="Untitled Cow Exhibition"
          description="An exhibition is on now."
        />
      )}
      {siteData.callForArtworks && (
        <SEO
          title="Call for Artworks"
          description="In this rumination, our bovine turn metastasizes the Udder under post-speculative conditions of production allegorical to the -pocene. It is a nightmare netherworld a fraction of a degree off to the anthro-. The existence of the Udder is denied by an aversion of eyes. Hiding in that slim crack of realisation, affordance of imagination portends threat of slippage, sudden and savage."
        />
      )}
      <div>
        {siteData.noExhibition && <NoExhibition />}
        {siteData.exhibition && <Exhibition />}
        {siteData.callForArtworks && <CallForArtworks />}
      </div>
      {/* <Webdev /> */}
    </Layout>
  )
}
