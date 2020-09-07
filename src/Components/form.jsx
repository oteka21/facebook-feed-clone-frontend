import React, { useState } from 'react'
import { Form as Container, InputContainer } from './form.styles'
import PropTypes from 'prop-types'
import { Textarea, Button } from './global.styles'
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
      <Textarea value={value} onChange={event => setValue(event.target.value)} placeholder="¿Que estas pensando?" />
    </InputContainer>
    <DropdownSelect onChange={handleSelectChange} />
    <Button>Publicar</Button>
  </Container>
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.string
}
