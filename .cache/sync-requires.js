const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/andrew.patterson/Projects/IM/gatsbyreact/src/pages/index.js"))),
  "component---src-templates-all-tags-index-js": hot(preferDefault(require("/Users/andrew.patterson/Projects/IM/gatsbyreact/src/templates/allTagsIndex.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/andrew.patterson/Projects/IM/gatsbyreact/src/templates/blogPost.js"))),
  "component---src-templates-single-tag-index-js": hot(preferDefault(require("/Users/andrew.patterson/Projects/IM/gatsbyreact/src/templates/singleTagIndex.js")))
}

