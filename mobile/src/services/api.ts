import axios from 'axios'

const api = axios.create({baseURL: 'http://192.168.100.25:3001'})

export default api
