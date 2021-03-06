module.exports =
  process.env.NODE_ENV === "development"
    ? {
        blog: true,
        mailchimp: true,
        noExhibition: false,
        exhibition: true,
        callForArtworks: false,
      }
    : {
        blog: false,
        mailchimp: true,
        noExhibition: false,
        exhibition: false,
        callForArtworks: true,
      }
