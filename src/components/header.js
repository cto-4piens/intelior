import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './layout.module.css'
import { DefaultMaxWidthContainer } from './layout'
import BlueLogo from './blueLogo'
const Header = ({ siteTitle }) => (
    <header
        className={styles.header}
    >
        <div className={styles.inner_container}>
            <div className={styles.image_wrapper}>
                <Link to="/">
                    <BlueLogo />
                </Link>
            </div>
            <div className={styles.link_container}>
                <div className={styles.link}>
                    <Link to="https://hellomy.house/magazine/096a9b5e-02f4-4868-b611-1a9db8761f05" style={{ color: "black", marginBottom: 0 }}>채용</Link>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
