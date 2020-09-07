import { useState } from 'react'
const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'

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

  return {
    error,
    loading,
    getPosts,
    savePost
  }
}
