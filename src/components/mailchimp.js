import React from "react"

const Mailchimp = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://notathoughtexperiment.us4.list-manage.com/subscribe/post?u=8604901982d0571432a7147f2&amp;id=4bb24a69f9"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">Email:</label>{" "}
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
          />
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </div>
      </form>
    </div>
  )
}

export default Mailchimp
