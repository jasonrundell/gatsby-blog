import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Layout, Menu } from 'antd'

import SkipToMain from '../SkipToMain'
import Breadcrumb from '../Breadcrumb'

import styles from './index.module.scss'

import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout

const _Layout = ({ title, crumbs, children, pathname }) => {
  return (
    <>
      <Header className={styles.header}>
        <Link to="/" className={styles.siteName}>
          {title}
        </Link>
        <Menu
          className={`visible--large`}
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
          style={{ lineHeight: '4rem' }}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/blog/">
            <Link to="/blog/">Blog</Link>
          </Menu.Item>
          <Menu.Item key="/products/">
            <Link to="/products/">Products</Link>
          </Menu.Item>
          <Menu.Item key="/contact-us/">
            <Link to="/contact-us/">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <SkipToMain />
      <Content id="main" className={styles.content}>
        {crumbs && <Breadcrumb crumbs={crumbs} />}
        {children}
      </Content>
      <Footer className={styles.footer}>
        © {new Date().getFullYear()}. Built with
        {` `}
        <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">
          Gatsby
        </a>{' '}
        and{' '}
        <a href="https://ant.design/" rel="noopener noreferrer">
          Ant Design
        </a>
        .{` `}
      </Footer>
    </>
  )
}

_Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default _Layout