import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const listPostServices = {
  getListPosts: () => {
    return axios.get(`${BASE_URL}/posts`)
  },
}
