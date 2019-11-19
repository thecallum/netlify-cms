import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import { rhythm } from "../utils/typography"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <>
      <p>Posts</p>

      <hr />
      <br />

      {posts.map(({ frontmatter, html }, index) => {
        const { title, description } = frontmatter

        return (
          <div key={index}>
            <h1>{title}</h1>
            <p>{description}</p>
            {html}
          </div>
        )
      })}
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
        }
        html
      }
    }
  }
`
