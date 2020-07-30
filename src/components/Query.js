import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {deleteQuery, updateQuery} from '../services/queryServices'
import {withRouter} from 'react-router-dom'
import{OrderButton} from './StyledComponents'
import{QueryContainer, InnerContent, RButton, LeftContent, QueryName} from './StyledComponentC'

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
        data: [updatedQuery, ...otherQueries]
      })
      history.push(`/dashboard`)
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
    justifyContent: "space-between",
    alignItems: "flex-start"
   } 

  const largeIcon = {
    width: "3.5em"
  }

  const queryFooter = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }

  return (
    <QueryContainer>
      {errorMessage && alert(errorMessage)}
      <LeftContent>
      <div>{responded ? (<img style={largeIcon} src="/check.png" alt="tick"></img>) : (<img style={largeIcon} src="/question.png" alt="question"></img>)}</div>
      </LeftContent>
      <InnerContent>
        <div style={{paddingLeft: "1em"}}>
          <div style={queryHeader}>
            <QueryName>{name}</QueryName>
            <OrderButton onClick={handleDelete}>Delete Query</OrderButton>
          </div>
          <div>{email} / {phone_number}</div>
          <div>{message}</div>
          <div style={queryFooter}>
            <div><RButton onClick={handleResponded}>Mark as Responded</RButton></div>
            <p>{formattedDate}</p>
          </div>
        </div>
      </InnerContent>
     
    </QueryContainer>
  )
}

export default withRouter(Query)