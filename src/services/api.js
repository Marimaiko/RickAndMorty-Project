import axios from 'axios'

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/graphql',
  method: 'post'
})
export default api
