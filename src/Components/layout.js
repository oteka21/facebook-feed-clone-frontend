import React, { Fragment } from 'react'
import { GlobalStyles } from './layout.styles'

const Layout = ({ children }) => {
  return <Fragment>
    <GlobalStyles />
    {children}
  </Fragment>
}

export default Layout
