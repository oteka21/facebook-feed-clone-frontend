import styled from 'styled-components'

export const Container = styled.div`
  width: 30%;
  max-width: 340px;
  border-radius: 10px;
  z-index: 11;
  background: #333435;
  position: fixed;
  top: calc(10%);
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0,0,0, 0.6);
  z-index: 10;
`
