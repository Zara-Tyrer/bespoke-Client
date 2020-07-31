import api from '../config/api'

// Returns a single email based on the id provided
export function getEmailFromId(emails, id) {
  const email =  emails.find((email) =>  email._id === id)
  return email
}

// Returns all emails from the server
export async function getAllEmails() {
  const response = await api.get("/emails")
  return response.data
}
  
// Adds an email on the server
export async function addEmail(newEmail) {
  const response = await api.post("/emails", newEmail)
  return response.data
}

// Deletes an email on the server
export async function deleteEmail(id) {
  const response = await api.delete(`/emails/${id}`)
  return response.data
}

