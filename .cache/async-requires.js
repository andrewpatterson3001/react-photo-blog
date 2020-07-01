// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-templates-all-tags-index-js": () => import("./../src/templates/allTagsIndex.js" /* webpackChunkName: "component---src-templates-all-tags-index-js" */),
  "component---src-templates-blog-post-js": () => import("./../src/templates/blogPost.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-single-tag-index-js": () => import("./../src/templates/singleTagIndex.js" /* webpackChunkName: "component---src-templates-single-tag-index-js" */)
}

