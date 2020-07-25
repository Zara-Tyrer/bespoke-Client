import axios from 'axios'

export default axios.create({
  baseURL: "https://bespoke-nails.herokuapp.com",
  timeout: 10000,
  withCredentials: true
})