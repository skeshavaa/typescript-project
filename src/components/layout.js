/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from './header.jsx'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header />
      <Content>
      {children}
      </Content>
    </div>
  )
}

export default Layout

const Content = styled.div`
  background: #ff6b6b;
  min-height: 100vh;
`