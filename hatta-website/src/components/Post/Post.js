import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`
/**very important hook to your other Gatsby projects, use it to get and use data with graphql */

const Post = () => {
  const data = useStaticQuery(query)

  return <p>{data.site.siteMetadata.description}</p>
}

export default Post
