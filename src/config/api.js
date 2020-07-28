import axios from 'axios'

export default axios.create({
  baseURL: "https://bespoke-nails.herokuapp.com/",
  // baseURL: "http://localhost:3001/",
  timeout: 10000,
  withCredentials: true
})
