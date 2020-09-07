import React, { useEffect, useState } from 'react'
import { Container, Feed } from './home.styles'
import { Layout, Form } from '../Components'
import { useData } from '../hooks'

const Home = () => {
  const [filter, setFilter] = useState('public')
  const [list, setList] = useState([])
  const { error, loading, getPosts, savePost } = useData()

  useEffect(() => {
    getPosts(filter)
      .then(data => setList(data))
  }, [filter])

  const handleSubmit = async (value) => {
    const newPost = await savePost({
      content: value
    })
    setList(prev => ([newPost, ...prev]))
  }

  return <Layout>
    <Container>
      <Feed>
        <h1>Facebook Feed</h1>
        <Form handleSubmit={handleSubmit}/>
        {list.map(item => <p key={item._id}>{item.content}</p>)}
      </Feed>
    </Container>
  </Layout>
}

export default Home
