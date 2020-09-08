import React, { useState, useEffect } from 'react'
import { Button, Textarea } from './global.styles'
import { DropdownSelect } from './select'
import { Container, Content, Actions, Time } from './post.styles'
import PropTypes from 'prop-types'
import * as timeago from 'timeago.js'
import Swal from 'sweetalert2'

export const Post = ({ onDelete, onEdit, content, _id, audience, date }) => {
  const [edit, setEdit] = useState()
  const [value, setValue] = useState(content)
  const [editedAudience, setEditedAudience] = useState(audience)

  useEffect(() => {
    setValue(content)
  }, [edit])

  useEffect(() => {
    setEditedAudience(audience)
  }, [audience])

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleChangeSelect = (event) => {
    setEditedAudience(event.selectedItem.value)
  }

  const handleDelete = () => {
    Swal.fire({
      text: '¿Estas seguro que deseas eliminar este post?',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    }).then(result => {
      result.isConfirmed && onDelete(_id)
    })
  }

  const handleEdit = () => {
    onEdit({
      id: _id,
      data: { audience: editedAudience, content: value }
    })
      .then(() => setEdit(false))
  }

  return (<Container>
    <Time>{timeago.format(new Date(date))}</Time>
    {edit
      ? <><Textarea value={value} onChange={handleChange} /><DropdownSelect defaultValue={audience} onChange={handleChangeSelect} /></>
      : <Content>
        {content}
      </Content>
    }
    <Actions>
      <Button onClick={() => setEdit(prev => !prev)}>{edit ? 'Cancelar' : 'Editar'}</Button>
      {!edit
        ? <Button onClick={handleDelete}>Eliminar</Button>
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
  audience: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}
