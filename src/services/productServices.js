import api from '../config/api'

// Returns all blog posts from the server
export async function getAllProducts() {
  const response = await api.get("/products")
  return response.data
  }
  
  