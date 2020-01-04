# About

Supermeowkat is built with Gatsby. It focuses on markdown for as many things as possible.

It has three main features: pages, modes (for art), and a blog.

# Pages

To make a page, create a markdown file in src/pages. The filename minus the extension will automatically be added to the navigation bar.

# Modes

Supermeowkat is built to make art world workflows easier. This part of it has three modes:

- NoExhibition
- Exhibition
- CallForArtworks

These modes can be set in src/pages/index.js. Simply comment out the modes you don't want, like so:

```
<div>
  {/* <NoExhibition /> */}
  {/* <Exhibition /> */}
  <CallForArtworks />
</div>
```

Each mode sets a different page for the landing page. These pages can be found in the directories in src/modes. Edit the markdown files to change content.

# Blog

Activate the blog by going to src/pages/blog.js and setting `const blogOn = false` to `true`.

Code in src/components/header.js will use this to add `Blog` to the navigation bar for easy access.

## Blogposts

Add blogposts to the src/blogposts directory.

Each post should be in its own directory. I recommend naming both directory and file with the datetime of creation to help with ordering them.

For example, a blogpost can look like this:

<!-- Use tree to get visualisation of blogposts dir -->

# CSS

They're all in src/components/layout.css.

# Upcoming features

- Pagination for the blog
- PayPal integration for exhibition mode
- PayPal integration for general support

# How to allow graphql to read directories for markdown files

First, add the directory to `plugins` in /gatsby-config. In this example, we add the blog directory:

```
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `blog`,
    path: `${__dirname}/src/blog`,
  },
},
```

Second, add a named query to the graphql query in `createPages` function in /gatsby-node.js. In this example, we add a query named `blog` to a graphql query that already has a query named `pages` in it:

```
return graphql(`
    {
      pages: allMarkdownRemark(
        filter: { ... }
      ) {
        ...
      }

      blog: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/blog/*/*.md" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              title
              author
              date
            }
          }
        }
      }
    }
`)
```

In the code above, note how we filter the directory: `filter: { fileAbsolutePath: { glob: "**/src/blog/*/*.md" } }`. In particular, note how there is a wildcard directory just before the wildcard `.md` file. This allows graphql to look into all sub-directories inside the blog directory.

If we leave out the wildcard directory in the code, graphql won't look into sub-directories.

Third, use Gatsby's `createPage()` function to create a page for the markdown files in the chosen directory. This would be the blog directory in our example:

```
return graphql(`
    {
      ...

      blog: allMarkdownRemark(
        ...
      ) {
        ...
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.pages.edges.forEach(({ node }) => {
      createPage({...})
    })

    res.data.blog.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve("src/templates/blogpostTemplate.js"),
      })
    })
  })
```

Note how we use the name of the query to tell Gatsby which query results to make the page for: `res.data.blog.edges.forEach`. Also note how the path is set to `node.frontmatter.path`. This means your markdown file must have a `path` variable, which acts as its URL. This is how `createPage()` links path to page.

Finally, create a template for the markdown files. In the code above, we have one at `src/templates/blogpostTemplate.js`.

I recommend keeping templates in this directory, away from where the markdown files that use them are. I kept a template file with its markdown files once and it produced some sort of conflict that prevented Gatsby from building. It was difficult to debug.

Check out the gatsby-node.js file in this project and the directories and files involved with it to get a clearer idea of the template and the markdown files.

# Resources

[Using multiple queries or entries on gatsbyjs createPages Node API](https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/)

[How do i create pages with multiple templates](https://spectrum.chat/gatsby-js/general/how-do-i-create-pages-with-multiple-templates~cd82ebe3-0d3b-4ce5-8f6a-193353d0867f)
