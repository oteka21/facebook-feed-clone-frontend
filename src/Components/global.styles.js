import styled from 'styled-components'

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const Textarea = styled.textarea`
  background: #3A3B3C;
  border-radius: 5px;
  color: #AAACB0;
  height: 100px;
  border: 0;
  width: 100%;
  outline: none;
  padding: 10px;
  resize: none;
  box-sizing: border-box;
`

export const Button = styled.button`
  border: 0;
  background: transparent;
  color: #AAACB0;
  letter-spacing: 1px;
  width: 100%;
  margin-top:10px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  &:Hover{
    background: #3A3B3C;
  }
`
