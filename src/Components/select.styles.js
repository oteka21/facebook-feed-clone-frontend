import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100px;
  z-index: ${({ open }) => open ? '101' : 'initial'};
`

export const Selected = styled.div`
  cursor: pointer;
  background: #3A3B3C;
  padding: 5px 6px;
  border-radius: ${({ open }) => open ? '3px 3px 0 0' : '3px'};
  position: relative;
  margin-top: 10px;

  &:after{
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    
    border-top: 5px solid #fff;
    position: absolute;
    right: 15px;
    top: calc(50% - 2px);
    transform: ${({ open }) => open ? 'rotate(180deg)' : ''};
  }

`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  position: absolute;
  width: 100%;

  & li{
    background: #3A3B3C;
    padding: 5px 6px;
    cursor: pointer;
  }

  & li:last-child{
    border-radius: ${({ open }) => open ? '0 0 3px 3px' : '0'};
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(0,0,0, 0.6);
  z-index: 100;
`
