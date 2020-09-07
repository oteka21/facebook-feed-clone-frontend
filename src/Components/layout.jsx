import React, { Fragment } from 'react'
import { GlobalStyles } from './layout.styles'
import PropTypes from 'prop-types'

export const Layout = ({ children }) => {
  return <Fragment>
    <GlobalStyles />
    {children}
  </Fragment>
}

Layout.propTypes = {
  children: PropTypes.element
}
