import React from "react"
import SEO from "../../components/seo"

export default function Webdev() {
  return (
    <div className="webdev-main">
      <SEO title="Atelier" />
      <div
        className="section"
        style={{
          position: "relative",
          background: "blue",
        }}
      >
                <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            background: "yellow",
            clipPath:
              "polygon(15% 0, 33% 100%, 35% 0, 55% 100%, 60% 0, 69% 100%, 100% 85%, 77% 0, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
          }}
        ></div>
        <div
          style={{
            border: "1px solid pink",
            zIndex: "9",
            height: "50%",
            width: "50%",
          }}
        >
          <div className="container">
            <h1 className="title">Supermeowkat Web Development</h1>
            <p className="subtitle">A boutique agency</p>
          </div>
          <div className="container">
            <article className="content">
              <p>Welcome to our cosy hearth.</p>
              <p>We're glad you're here.</p>
            </article>
          </div>
        </div>
      </div>
      <div className="section" style={{ background: "red" }}>
        <div className="container">
          <h1 className="title">Our craft</h1>
          <p className="subtitle">Only the most optimal solutions</p>
        </div>
        <div className="container">
          <article className="content">
            <p>
              Would you like a Content Management System (CMS)? How about an
              e-commerce platform? Do you want a landing page with parallax
              effect?
            </p>
            <p>Tell us your needs. We aim to provide.</p>
          </article>
        </div>
      </div>
      <div className="section" style={{ background: "green" }}>
        <div className="container">
          <h1 className="title">A truthful agency</h1>
          <p className="subtitle">Honesty makes good planning</p>
        </div>
        <div className="container">
          <article className="content">
            <p>We'll never over-promise, and only tell you the truth.</p>
            <p>We won't compromise your own delivery deadlines.</p>
          </article>
        </div>
      </div>
      <div className="section" style={{ background: "purple" }}>
        <div className="container">
          <h1 className="title">Recommendations</h1>
          <p className="subtitle">Clients love us</p>
        </div>
        <div className="container">
          <article className="content">
            <p>Two references and a cat.</p>
          </article>
        </div>
      </div>
      <div className="section" style={{ background: "coral" }}>
        <div className="container">
          <h1 className="title">Talk to us</h1>
          <p className="subtitle">We're here for you</p>
        </div>
        <div className="container">
          <article className="content">
            <p>
              Enjoy the comfort of knowing we're always here for you (except
              weekends).
            </p>
            <p>Email.</p>
          </article>
        </div>
      </div>
    </div>
  )
}
