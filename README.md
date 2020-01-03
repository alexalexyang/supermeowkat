# About

Supermeowkat is built with Gatsby. It focuses on markdown for as many things as possible.

# Pages

To make a page, create a markdown file in src/pages. The filename minus the extension will automatically be added to the navigation bar.

# Modes

Supermeowkat is built to make art world workflows easier. It has three modes:

- noExhibition
- exhibition
- callForArtworks

They're in camelCase because of JavaScript convention.

These modes can be set in src/pages/index.js in `const mode = "callForArtworks"`. It must be a string, that is, within inverted commas.

Each mode sets a different page for the landing page. These pages can be found in the directories in src/pages/modes. To change their content, edit the markdown files.

# CSS

They're all in src/components/layout.css.

# Upcoming features

- Exhibition mode, with PayPal integration
- Make the site look nicer

# Resources

[Using multiple queries or entries on gatsbyjs createPages Node API](https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/)

[How do i create pages with multiple templates](https://spectrum.chat/gatsby-js/general/how-do-i-create-pages-with-multiple-templates~cd82ebe3-0d3b-4ce5-8f6a-193353d0867f)