import React, { useState, useEffect } from 'react'
import { Button, Textarea } from './global.styles'
import { DropdownSelect } from './select'
import { Container, Content, Actions } from './post.styles'
import PropTypes from 'prop-types'

export const Post = ({ onDelete, onEdit, content, _id, audience }) => {
  const [edit, setEdit] = useState()
  const [value, setValue] = useState(content)
  const [editedAudience, setEditedAudience] = useState('')

  useEffect(() => {
    setValue(content)
  }, [edit])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleChangeSelect = (event) => {
    setEditedAudience(event.selectedItem.value)
  }

  const handleEdit = () => {
    onEdit({
      _id,
      data: { audience: editedAudience, content: value }
    })
  }

  return (<Container>
    {edit
      ? <><Textarea value={value} onChange={handleChange} /><DropdownSelect defaultValue={audience} onChange={handleChangeSelect} /></>
      : <Content>
        {content}
      </Content>
    }
    <Actions>
      <Button onClick={() => setEdit(prev => !prev)}>{edit ? 'Cancelar' : 'Editar'}</Button>
      {!edit
        ? <Button onClick={() => onDelete(_id)}>Eliminar</Button>
        : <Button onClick={handleEdit}>Guardar</Button>
      }
    </Actions>
  </Container>)
}

Post.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  audience: PropTypes.string.isRequired
}
