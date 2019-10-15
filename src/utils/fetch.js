import axios from 'axios'

const fetchInstance = axios.create({
  baseURL: 'https://so-easy.cc/api',
  timeout: 2000,
})

export default fetchInstance
