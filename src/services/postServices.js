import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const postServices = {
  getPost: (id) => {
    return axios.get(`${BASE_URL}/posts/${id}`)
  },
}
