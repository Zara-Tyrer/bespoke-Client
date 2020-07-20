import api from '../config/api'

// Returns a single products based on the id provided
export function getProductFromId(products,id) {
  const product =  products.find((product) =>  product._id === id)
  return product
}

// Returns all products from the server
export async function getAllProducts() {
  const response = await api.get("/products")
  return response.data
}
  
// Adds a product on the server
export async function addProduct(newProduct) {
  const response = await api.post("/products", newProduct)
  return response.data
}

// Deletes a product on the server
export async function deleteProduct(id) {
  const response = await api.delete(`/products/${id}`)
  return response.data
}

// edits a product on the server
export async function updateProduct(product) {
  const response = await api.put(`/products/${product._id}`, product)
  return response.data
}

