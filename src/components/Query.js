import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {deleteQuery} from '../services/queryServices'
import {withRouter} from 'react-router-dom'
import{Button, ErrorText} from './StyledComponents'

const Query = ({history, query}) => {
  const {store, dispatch} = useGlobalState()
  const {queries} = store
  const [errorMessage, setErrorMessage] = useState(null)
  if (!query) return null

  const {name, email, phone_number, date_created, message, responded} = query

  //formatting date
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
  let dateFormat = new Date(date_created)
  let formattedDate = dateFormat.getDate() + "/" + monthNames[dateFormat.getMonth()] + "/" + dateFormat.getFullYear()


  function handleDelete(event) {
    event.preventDefault()
    deleteQuery(query._id).then(() => {
      console.log("deleted query")
      const updatedQueries = queries.filter((item) => item._id !== query._id)
      dispatch({
        type: "setQueries",
        data: updatedQueries
      })
      history.push("/query")
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
      console.log("caught error on edit", error)
      if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }

  // function handleEdit(event) {
  //   event.preventDefault()

  // }

  return (
    <div>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <h4>{name}</h4>
      <span>Contact: {email}, {phone_number}</span>
      <p>{message}</p>
      <p>{formattedDate}</p>
      <p>Response has been sent: {responded}</p>
      <div>
        <Button onClick={handleDelete}>Delete Query</Button>
      </div>
    </div>
  )
}

export default withRouter(Query)