// const BASE_URL = process.env.BASE_URL || 'https://facebook-feed-clone-v1.vercel.app'
const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'
class Api {
  constructor () {
    this.baseUrl = BASE_URL
  }

  async getPosts (filter = '') {
    const response = await fetch(`${this.baseUrl}/post?filter=${filter}`)
    return await response.json()
  }

  async savePost (data) {
    const response = await fetch(`${this.baseUrl}/post`, {
      body: JSON.stringify(data),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await response.json()
  }
}

export default new Api()
