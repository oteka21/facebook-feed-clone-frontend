import React, { useEffect, useState } from 'react'
import { Container, Feed } from './home.styles'
import { Layout, Form, DropdownSelect, Post } from '../Components'
import { useData } from '../hooks'

const Home = () => {
  const [filter, setFilter] = useState('public')
  const [list, setList] = useState([])
  const { error, loading, getPosts, savePost, deletePost } = useData()

  useEffect(() => {
    getPosts(filter)
      .then(data => setList(data))
  }, [filter])

  const handleChangeSelect = ({ selectedItem }) => {
    setFilter(selectedItem.value)
  }

  const handleSubmit = async (data) => {
    const newPost = await savePost(data)
    setList(prev => ([newPost, ...prev]))
  }

  const handleDelete = async (postId) => {
    const deletedPost = await deletePost(postId)
    const newList = list.filter(item => item._id !== deletedPost.result._id)
    setList(newList)
  }

  const handleEdit = (editData) => {
    // console.log(editData)
  }

  return <Layout>
    <Container>
      <Feed>
        <h1>Reactibook</h1>
        <Form handleSubmit={handleSubmit}/>
        <div style={{ margin: '10px 0' }}>
          <DropdownSelect onChange={handleChangeSelect} />
        </div>
        {list.map(item => <Post
          key={item._id}
          onEdit={handleEdit}
          onDelete={handleDelete}
          {...item} />)}
      </Feed>
    </Container>
  </Layout>
}

export default Home
