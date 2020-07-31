import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addQuery} from '../services/queryServices'
import {CentralForm, FormBlock, LabelQ, InputQ, TextAreaQ, SubmitButton } from './StyledComponentC'

//Contact form component for user to send through a query to admin. 

const NewQuery = ({history}) => {
  
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }

  //Date field to be able to sort in admin dashboard
  function handleSubmit(event) {
    event.preventDefault()
    const newQuery = {
      name: formState.name,
      email: formState.email,
      phone_number: formState.phone_number,
      message: formState.message,
      date_created: Date.now()
    }
    //call to server to create new query and then set in global state
    addQuery(newQuery).then((newQuery) => {
      dispatch({
        type: 'setQueries',
        data: [newQuery, ...queries]
      })
      //send user to confirmation message page
      history.push(`/contact/confirm/${newQuery._id}`)
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
      console.log('Caught error creating new query', error)
      //if error occurs, setErrorMessage in local state and alert in form
      if(status === 403)
          setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
      else
          setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }
  //initialize formstate to empty
  const initialFormState = {
    name: "",
    email: "",
    phone_number: "",
    message: ""
  }

  //local state
  const [formState, setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  const {store, dispatch} = useGlobalState()
  const {queries} = store

  //render contact form using styled components for consistency
  return (
    <CentralForm>
      <form style={{paddingTop:"1.5em", paddingBottom:"1.5em"}} id="newQueryForm" onSubmit={handleSubmit}>
          {errorMessage && alert(errorMessage)}
          <FormBlock>
              <LabelQ>Full Name*</LabelQ>
              <InputQ data-cy="nameQuery" required type="text" name="name" placeholder="Enter your name" onChange={handleChange}></InputQ>
          </FormBlock>
          <FormBlock>
              <LabelQ>Email Address*</LabelQ>
              <InputQ data-cy="emailQuery" required type="text" name="email" placeholder="Enter your email" onChange={handleChange}></InputQ>
          </FormBlock>
          <FormBlock>
              <LabelQ>Phone Number</LabelQ>
              <InputQ data-cy="numberQuery" required type="text" name="phone_number" placeholder="Enter your phone number" onChange={handleChange}></InputQ>
          </FormBlock>
          <FormBlock>
              <LabelQ>Message*</LabelQ>
              <TextAreaQ data-cy="messageQuery" required type="text" name="message" placeholder="What would you like to ask?" onChange={handleChange}></TextAreaQ>
          </FormBlock>
          <FormBlock>
              <SubmitButton data-cy="submitQuery" type="submit" value="SUBMIT QUERY"></SubmitButton>
          </FormBlock>
        </form>
      </CentralForm>
  )

}


export default withRouter(NewQuery)