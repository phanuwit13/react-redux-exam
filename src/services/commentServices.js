import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const commentServices = {
  getComment: (postId) => {
    return axios.get(`${BASE_URL}/comments?postId=${postId}`)
  },
}
