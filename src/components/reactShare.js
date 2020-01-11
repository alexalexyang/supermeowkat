import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FacebookShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
  FacebookShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,
  PocketShareButton,
  InstapaperShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  WeiboIcon,
} from "react-share"

function ReactShare({ title, description, image, hashtag }) {
  const shareUrl =
    (typeof window !== "undefined" && window.location) ||
    "https://supermeowkat.notathoughtexperiment.me"

    console.log(shareUrl)
  image = `https://supermeowkat.notathoughtexperiment.me${image}`

  const iconColour = "rgb(175, 135, 195)"

  return (
    <div className="react-share-container">
      <div className="social-media-network">
        <FacebookShareButton
          url={shareUrl}
          quote={description}
          hashtag={title}
          className="network-share-button"
        >
          <FacebookIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </FacebookShareButton>

        <div>
          <FacebookShareCount
            url={shareUrl}
            className="social-media-network__share-count"
          >
            {count => count}
          </FacebookShareCount>
        </div>
      </div>

      <div className="social-media-network">
        <FacebookMessengerShareButton
          url={shareUrl}
          appId="521270401588372"
          className="network-share-button"
        >
          <FacebookMessengerIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </FacebookMessengerShareButton>
      </div>

      <div className="social-media-network">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          via={shareUrl}
          hashtags=""
          className="network-share-button"
        >
          <TwitterIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </TwitterShareButton>

        <div className="social-media-network__share-count">&nbsp;</div>
      </div>

      <div className="social-media-network">
        <TelegramShareButton
          url={shareUrl}
          title={title}
          className="network-share-button"
        >
          <TelegramIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </TelegramShareButton>

        <div className="social-media-network__share-count">&nbsp;</div>
      </div>

      <div className="social-media-network">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="network-share-button"
        >
          <WhatsappIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </WhatsappShareButton>

        <div className="social-media-network__share-count">&nbsp;</div>
      </div>

      <div className="social-media-network">
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          summary={description}
          source={shareUrl}
          className="network-share-button"
        >
          <LinkedinIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </LinkedinShareButton>
      </div>

      <div className="social-media-network">
        <PinterestShareButton
          url={shareUrl}
          description={description}
          media={"image"}
          className="network-share-button"
        >
          <PinterestIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </PinterestShareButton>

        <div>
          <PinterestShareCount
            url={shareUrl}
            className="social-media-network__share-count"
          />
        </div>
      </div>

      <div className="social-media-network">
        <VKShareButton
          url={shareUrl}
          image={"image"}
          className="network-share-button"
        >
          <VKIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </VKShareButton>

        <div>
          <VKShareCount
            url={shareUrl}
            className="social-media-network__share-count"
          />
        </div>
      </div>

      <div className="social-media-network">
        <OKShareButton
          url={shareUrl}
          title={title}
          description={description}
          image={"image"}
          className="network-share-button"
        >
          <OKIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </OKShareButton>

        <div>
          <OKShareCount
            url={shareUrl}
            className="social-media-network__share-count"
          />
        </div>
      </div>

      <div className="social-media-network">
        <RedditShareButton
          url={shareUrl}
          title={title}
          windowWidth={660}
          windowHeight={460}
          className="network-share-button"
        >
          <RedditIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </RedditShareButton>

        <div>
          <RedditShareCount
            url={shareUrl}
            className="social-media-network__share-count"
          />
        </div>
      </div>

      <div className="social-media-network">
        <TumblrShareButton
          url={shareUrl}
          title={title}
          caption={description}
          tags={""}
          className="network-share-button"
        >
          <TumblrIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </TumblrShareButton>

        <div>
          <TumblrShareCount
            url={shareUrl}
            className="social-media-network__share-count"
          />
        </div>
      </div>

      <div className="social-media-network">
        <LivejournalShareButton
          url={shareUrl}
          title={title}
          description={description}
          className="network-share-button"
        >
          <LivejournalIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </LivejournalShareButton>
      </div>

      <div className="social-media-network">
        <MailruShareButton
          url={shareUrl}
          title={title}
          description={description}
          imageUrl={"image"}
          className="network-share-button"
        >
          <MailruIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </MailruShareButton>
      </div>

      <div className="social-media-network">
        <EmailShareButton
          url={shareUrl}
          subject={title}
          body={description}
          className="network-share-button"
        >
          <EmailIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </EmailShareButton>
      </div>
      <div className="social-media-network">
        <ViberShareButton
          url={shareUrl}
          title={title}
          separator=" - "
          className="network-share-button"
        >
          <ViberIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </ViberShareButton>
      </div>

      <div className="social-media-network">
        <WorkplaceShareButton
          url={shareUrl}
          quote={description}
          hashtag=""
          className="network-share-button"
        >
          <WorkplaceIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </WorkplaceShareButton>
      </div>

      <div className="social-media-network">
        <LineShareButton
          url={shareUrl}
          title={title}
          className="network-share-button"
        >
          <LineIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </LineShareButton>
      </div>

      <div className="social-media-network">
        <WeiboShareButton
          url={shareUrl}
          title={title}
          image={"image"}
          className="network-share-button"
        >
          <WeiboIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </WeiboShareButton>
      </div>

      <div className="social-media-network">
        <PocketShareButton
          url={shareUrl}
          title={title}
          className="network-share-button"
        >
          <PocketIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </PocketShareButton>
      </div>

      <div className="social-media-network">
        <InstapaperShareButton
          url={shareUrl}
          title={title}
          description={description}
          className="network-share-button"
        >
          <InstapaperIcon
            size={32}
            round
            bgStyle={{ fill: "none" }}
            iconFillColor={iconColour}
          />
        </InstapaperShareButton>
      </div>
    </div>
  )
}
export default ReactShare
