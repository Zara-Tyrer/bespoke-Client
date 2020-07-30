import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addQuery} from '../services/queryServices'
import {InputButton} from './StyledComponents'
import {CentralForm, FormBlock, LabelQ, InputQ, TextAreaQ, SubmitButton } from './StyledComponentC'
const NewQuery = ({history}) => {
  
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newQuery = {
      name: formState.name,
      email: formState.email,
      phone_number: formState.phone_number,
      message: formState.message,
      date_created: Date.now()
    }
    addQuery(newQuery).then((newQuery) => {
      dispatch({
        type: 'setQueries',
        data: [newQuery, ...queries]
      })
      //change to confirmation message
      console.log("created new query", newQuery._id)
      history.push(`/contact/confirm/${newQuery._id}`)
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
      console.log('Caught error creating new query', error)
      if(status === 403)
                setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
            else
                setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }

  const initialFormState = {
    name: "",
    email: "",
    phone_number: "",
    message: ""
  }

  const [formState, setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  const {store, dispatch} = useGlobalState()
  const {queries} = store

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