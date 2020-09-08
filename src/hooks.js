import { useState } from 'react'
const BASE_URL = process.env.BASE_URL || 'https://facebook-feed-clone-v1.oteka21.vercel.app'

export const useData = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getPosts = async (filter = '') => {
    setLoading(true)
    const response = await fetch(`${BASE_URL}/post?filter=${filter}`)
    const list = await response.json()
    setLoading(false)
    return list
  }

  const savePost = async (data) => {
    setLoading(true)
    const response = await fetch(`${BASE_URL}/post`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const newPost = await response.json()
    setLoading(false)
    return newPost
  }

  const deletePost = async (id) => {
    setLoading(true)
    const response = await fetch(`${BASE_URL}/post/${id}`, { method: 'DELETE' })
    const deletedPost = response.json()
    setLoading(false)
    return deletedPost
  }
  const editPost = async ({ id, data }) => {
    setLoading(true)
    const response = await fetch(`${BASE_URL}/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const editedPost = response.json()
    setLoading(false)
    return editedPost
  }

  return {
    error,
    loading,
    getPosts,
    savePost,
    deletePost,
    editPost
  }
}
