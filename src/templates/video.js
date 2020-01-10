import React from "react"

const Video = ({ src, title, ...props }) => (
  <div className="video">
    <iframe
      src={src}
      title={title}
      width="100%"
      height="100%"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
