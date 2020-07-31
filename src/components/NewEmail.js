import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addEmail} from '../services/emailServices'
import {EmailForm, EmailInput, EmailLabel, EmailFormBlock, EmailSubmit, ComeOn, Text} from './StyledComponents'




const NewEmail = ({history}) => {
  
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }

  function handleSubmit(event) {
    const newEmail = {
      email: formState.email,
    }
    //call to server to create new email and then set in global state
    addEmail(newEmail).then((newEmail) => {
      dispatch({
        type: 'setEmail',
        data: [newEmail, ...emails]
      })
      history.push("/")
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
      console.log('Error submitting email', error)
      //if error occurs, setErrorMessage in local state and alert in form
      if(status === 403)
          setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
      else
          setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }
  //initialize formstate to empty
  const initialFormState = {
    email: ""
  }

  //local state
  const [formState, setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  const {store, dispatch} = useGlobalState()
  const {emails} = store

  const formDiv = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  //render email sign up using styled components for consistency
  return (
    <EmailForm>
      <form style={formDiv} id="newEmailForm" onSubmit={handleSubmit}>
        {errorMessage && alert(errorMessage)}
        <ComeOn>
          <Text>COME</Text>
          <Text>ON</Text>
          <Text>OVER</Text>
        </ComeOn>
        <EmailFormBlock>
            <EmailLabel>LET'S BE PEN PALS</EmailLabel>
            <EmailInput required type="text" name="email" placeholder="SIGN UP FOR OUR NEWSLETTER" onChange={handleChange}></EmailInput>
            <EmailSubmit type="submit" value="SUBMIT">SUBMIT</EmailSubmit>
        </EmailFormBlock>
      </form>
    </EmailForm>
  )
}

export default withRouter(NewEmail)