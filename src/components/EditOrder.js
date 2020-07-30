import React, {useState, useEffect} from 'react'
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {getProductFromId} from '../services/productServices'
import {addOrder} from '../services/orderServices'
import {InputButton} from './StyledComponents'
import {CentralForm, FormBlock, LabelQ, InputQ, TextAreaQ, FormInfo} from './StyledComponentC'

// creates an order from an existing product in the shop (so order details are pre-filled, including product image)


const EditOrder = ({history, match}) => {

  const {store, dispatch} = useGlobalState()
  const {products} = store
  const productId = match.params.id
  const product = getProductFromId(products, productId)
  
  // handle change in form input fields and set Form state to be used in creation of new order 
  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormState({
      ...formState,
      [name]: value
    })
  }

  //what happens when form is submitted
  function handleSubmit(event) {
    event.preventDefault()
    //creation of a new order using the existing product details stored in value of form, 
    //and the typed details from customer in local formState
    const newOrder = {
      name: formState.name,
      address: formState.address,
      email: formState.email,
      phone_number: formState.phone_number,
      nail_length: formState.nail_length,
      nail_shape: formState.nail_shape,
      nail_style: formState.nail_style,
      cost: formState.cost,
      image: {
        description: formState.image.description,
        fileLink: formState.image.fileLink
      }
    }
    //call async add order function which awaits a post request to server
    addOrder(newOrder).then((newOrder) => {
      // add new order to store (global state)
      dispatch({
        type: 'setOrders',
        data: [newOrder, ...orders]
      })
      // send to confirmation page 
      history.push(`/order/confirm/${newOrder._id}`)
    }).catch((error) => {
      //catch any errors with product creation and set in local state, will pop up as an alert
      const status = error.response ? error.response.status : 500
      console.log('Caught error on edit', error)
      if(status === 403)
                setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
            else
                setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }
  const initialFormState = {
    // initial form state blank
    // add auto-filled data from the shop in newOrder object
    name: "",
    address: "",
    email: "",
    phone_number: "",
    nail_length: "",
    nail_shape: "",
    nail_style: "",
    cost: "",
    // set inital form state back to blank
    image: ""
  } 

  //local state for formState and ErrorMessage
  const [formState,setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  //call in orders from store (global state)
  const {orders} = store

  useEffect(() => {
    //hook to set formState after render using existing product details and setting customer details to empty strings
    product && setFormState({
      name: "",
      address: "",
      email: "",
      phone_number: "",
      nail_length: product.nail_length,
      nail_shape: product.nail_shape,
      nail_style: product.nail_style,
      cost: product.cost,
      image: {
        description: product.image.description,
        fileLink: product.image.fileLink
      }
    })
  },[product])

  //render form for customer details with styled components styling. 
  return (
    <CentralForm>
      <form id="editOrderForm" onSubmit={handleSubmit}>
        {errorMessage && alert(errorMessage)}
        <FormInfo style={{paddingTop:"1em"}}>
          <h3>Contact Details</h3>
        </FormInfo>
        <FormBlock>
            <LabelQ>Name*</LabelQ>
            <InputQ required type="text" name="name" placeholder="Enter your name" onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Address</LabelQ>
            <TextAreaQ required type="text" name="address" placeholder="Enter your address" onChange={handleChange}></TextAreaQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Email*</LabelQ>
            <InputQ required type="text" name="email" placeholder="Enter your email" onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Phone Number</LabelQ>
            <InputQ required type="text" name="phone_number" placeholder="Enter your phone number" onChange={handleChange}></InputQ>
        </FormBlock>
        <FormInfo>
          <h3>Order Details</h3>
        </FormInfo>
        <FormBlock>
            <LabelQ>Nail Length</LabelQ>
            <InputQ required type="text" name="nail_length" value={formState.nail_length} onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Nail Shape</LabelQ>
            <InputQ required type="text" name="nail_shape" value={formState.nail_shape} onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <LabelQ>Nail Style</LabelQ>
            <InputQ required type="text" name="nail_style" value={formState.nail_style} onChange={handleChange}></InputQ>
        </FormBlock>
        <FormBlock>
            <p>Total: £{formState.cost}</p>
        </FormBlock>
        <FormBlock>
            <InputButton type="submit" value="Submit order"></InputButton>
        </FormBlock>
      </form>
    </CentralForm>
  ) 
}

export default withRouter(EditOrder)

