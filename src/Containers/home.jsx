import React, { useEffect, useState } from 'react'
import { Container, Feed } from './home.styles'
import { Layout, Form, DropdownSelect, Post, LoaderSpinner } from '../Components'
import { useData } from '../hooks'
import Swal from 'sweetalert2'

const Home = () => {
  const [filter, setFilter] = useState('public')
  const [list, setList] = useState({})
  const { error, loading, getPosts, savePost, deletePost, editPost } = useData()

  useEffect(() => {
    if (error) {
      Swal.fire({
        text: 'Tenemos problemas para recibir tu solicitud, por favor intentalo más tarde!',
        icon: 'error'
      })
    }
  }, [error])

  useEffect(() => {
    getPosts(filter)
      .then(data => {
        const normalizedList = data.reduce((acu, item) => ({ ...acu, [item._id]: item }), {})
        setList(normalizedList)
      })
  }, [filter])

  const handleChangeSelect = ({ selectedItem }) => {
    setFilter(selectedItem.value)
  }

  const handleSubmit = async (data) => {
    if (data.content === '') {
      return Swal.fire({
        text: 'Por favor completa el formulario!',
        icon: 'error'
      })
    }
    const newPost = await savePost(data)

    setList(prev => ({ [newPost._id]: newPost, ...prev }))
  }

  const handleDelete = async (postId) => {
    const deletedPost = await deletePost(postId)
    const { ...newList } = list
    delete newList[deletedPost._id]
    setList(newList)
  }

  const handleEdit = async (editData) => {
    console.log(editData)
    const editedPost = await editPost(editData)
    const { ...newList } = list
    newList[editedPost._id] = editedPost
    setList(newList)
  }

  return <Layout>
    <Container>
      <Feed>
        <h1>Reactibook</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <LoaderSpinner visible={loading} />
        </div>
        <Form handleSubmit={handleSubmit}/>
        <div style={{ margin: '10px 0' }}>
          <DropdownSelect onChange={handleChangeSelect} />
        </div>
        {Object.keys(list).map(item => <Post
          key={list[item]._id}
          onEdit={handleEdit}
          onDelete={handleDelete}
          {...list[item]} />)}
      </Feed>
    </Container>
  </Layout>
}

export default Home
