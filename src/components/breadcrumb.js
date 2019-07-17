import { Link } from 'gatsby'
import React from 'react'

import styles from './breadcrumb.module.scss'

export default ({ crumbs }) => {
  const crumbItems = crumbs.map(crumb => {
    return (
      <li key={crumb.path}>
        <Link to={crumb.path}>{crumb.text}</Link>
      </li>
    )
  })
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {crumbItems}
      </ol>
    </nav>
  )
}
