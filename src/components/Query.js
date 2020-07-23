import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {deleteQuery, updateQuery} from '../services/queryServices'
import {withRouter} from 'react-router-dom'
import{ErrorText} from './StyledComponents'
import{QueryContainer, InnerContent, Button} from './StyledComponentC'

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

  function handleResponded(event) {
    event.preventDefault()
    const updatedQuery = {
      ...query,
      responded: true
    }

    updateQuery(updatedQuery).then(() => {
      const otherQueries = queries.filter((query) => query._id !== updatedQuery._id)
      dispatch({
        type: "setQueries",
        data: [updatedQuery, otherQueries]
      })
      history.push('/query')
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
        console.log("caught error marking as responded", error)
        if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }
   
  const queryHeader = {
    display: "flex",
    justifyContent: "space-between"
   } 

  const completedIcon = {
    width: "1em",
  }

  const queryFooter = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }

  return (
    <QueryContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <InnerContent>
        <div style={queryHeader}>
          <h4>{name}</h4>
          <Button onClick={handleDelete}>Delete Query</Button>
        </div>
        <p>Contact: {email}, {phone_number}</p>
        <p>{message}</p>
        <p>{formattedDate}</p>
        <div style={queryFooter}>
          <div>Responded:{responded ? (<img style={completedIcon} src="tick.png" alt="tick"></img>) : (<img style={completedIcon} src="close.png" alt="cross"></img>)}</div>
          <div><Button onClick={handleResponded}>Mark as Responded</Button></div>
        </div>
      </InnerContent>
     
    </QueryContainer>
  )
}

export default withRouter(Query)