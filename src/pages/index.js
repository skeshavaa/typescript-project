import React from "react"
import { Link, StaticQuery, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
  query my {
    gcms {
      assets {
        createdAt
      }
    }
  }
  `)

  console.log(data)

  return(
    <h1>sdf</h1>
  )
  
}

export default IndexPage