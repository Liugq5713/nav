import axios from 'axios'

const fetchInstance = axios.create({
  baseURL: 'https://so-easy.cc/api',
})

export default fetchInstance
