import api from '../config/api'

// Returns a single query based on the id provided
export function getQueryFromId(queries, id) {
  const query =  queries.find((query) =>  query._id === id)
  return query
}

// Returns all queries from the server
export async function getAllQueries() {
  const response = await api.get("/query")
  return response.data
}
  
// Adds a query on the server
export async function addQuery(newQuery) {
  const response = await api.post("/query", newQuery)
  return response.data
}

// Deletes a query on the server
export async function deleteQuery(id) {
  const response = await api.delete(`/query/${id}`)
  return response.data
}

// edits a query on the server -> for admin to mark as responded to
export async function updateQuery(query) {
  const response = await api.put(`/query/${query._id}`, query)
  return response.data
}

