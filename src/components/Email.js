import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {deleteEmail} from '../services/emailServices'
import {withRouter} from 'react-router-dom'
import{EmailContainer, EmailDeleteButton, Emails} from './StyledComponents'


const Email = ({history, email}) => {
  const {store, dispatch} = useGlobalState()
  const {emails} = store
  const [errorMessage, setErrorMessage] = useState(null)
  if (!email) return null


  function handleDelete(event) {
    event.preventDefault()
    deleteEmail(email._id).then(() => {
      console.log("deleted email")
      const updatedEmails = emails.filter((item) => item._id !== email._id)
      dispatch({
        type: "setEmails",
        data: updatedEmails
      })
      history.push("/emails")
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
      console.log("caught error on edit", error)
      if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }

  const emailIcon = {
    width: "1em",
    marginRight: "5px"
  }

  return (
    <EmailContainer>
      <Emails>
        {errorMessage && alert(errorMessage)}
        <div style={{display: "flex"}}>
          <img style={emailIcon} src="/mail.png" alt="mail icon"></img>
          <div>{email.email}</div>
        </div>
        <EmailDeleteButton onClick={handleDelete}>Delete Email</EmailDeleteButton>
      </Emails>
    </EmailContainer>
  )
}

export default withRouter(Email)