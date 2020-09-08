import React from 'react'
import { Container } from './loaderSpinner.styles'

export const LoaderSpinner = ({ visible }) => {
  return <Container visible={visible}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></Container>
}
