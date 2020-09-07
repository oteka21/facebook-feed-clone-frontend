import React, { useState } from 'react'
import { Form as Container, InputContainer } from './form.styles'
import PropTypes from 'prop-types'
import { Avatar, Textarea, Button } from './global.styles'
import { DropdownSelect } from '../Components'

export const Form = ({ handleSubmit, user }) => {
  const [value, setValue] = useState('')
  const [audience, setAudience] = useState('public')

  const onSubmit = event => {
    event.preventDefault()
    handleSubmit({
      content: value,
      audience
    })
    setValue('')
  }

  const handleSelectChange = (event) => {
    setAudience(event.selectedItem.value)
  }

  return <Container onSubmit={onSubmit}>
    <InputContainer>
      <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
        <DropdownSelect onChange={handleSelectChange} />
      </div>
      <Avatar src="https://icon-library.com/images/facebook-user-icon/facebook-user-icon-27.jpg" alt={`avatar image for ${user} user`}/>
      <Textarea value={value} onChange={event => setValue(event.target.value)} placeholder="¿Que estas pensando?" />
    </InputContainer>
    <Button>Publicar</Button>
  </Container>
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.string
}
