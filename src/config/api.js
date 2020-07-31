import axios from 'axios'

//creates an axios request to be used in services (connection between client and server)

export default axios.create({
  // baseURL: "https://bespoke-nails.herokuapp.com/",
  baseURL: "http://localhost:3001/",
  timeout: 10000,
  withCredentials: true
})
