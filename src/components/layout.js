/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styles from './layout.module.css'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main>{children}</main>
            <footer>
                <DefaultMaxWidthContainer>
                    <h6>상호: 주식회사 인텔리어</h6>
                    <h6>대표: 김정환</h6>
                    <h6>대표번호: 02-6959-9797</h6>
                    <h6>FAX: 02-2659-6766</h6>
                    <h6>전자메일: dev@hellomy.house</h6>
                    <h6>사업자등록번호: 747-88-01668</h6>
                    <h6>통신판매번호: 2020-서울강서-2720</h6>
                    <h6>주소: 서울특별시 강서구 마곡서로 133, 713동 7층 705호</h6>
                    <h6>Copyright(C) 인텔리어(hellomy.house) All Rights Reserved</h6>
                </DefaultMaxWidthContainer>
            </footer>
        </>
    )
}

export const DefaultMaxWidthContainer = ({ children }) => {
    return (
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1.45rem`,
            }}
        >
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
