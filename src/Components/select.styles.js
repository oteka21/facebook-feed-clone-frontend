import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100px;
`

export const Selected = styled.div`
  cursor: pointer;
  background: #3A3B3C;
  padding: 5px 6px;
  border-radius: ${({ open }) => open ? '3px 3px 0 0' : '3px'};
  position: relative;

  &:after{
    content: "";
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    
    border-top: 8px solid #fff;
    position: absolute;
    right: 8px;
    top: calc(50% - 5px);
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
