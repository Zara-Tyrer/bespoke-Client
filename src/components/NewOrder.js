import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addOrder} from '../services/orderServices'
import { Block, Input, Label, InputButton, ErrorText, TextArea} from './StyledComponents'


const NewOrder = ({history}) => {

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
    const newOrder = {
      name: formState.name,
      address: formState.address,
      email: formState.email,
      phone_number: formState.phone_number,
      nail_length: formState.nail_length,
      nail_shape: formState.nail_shape,
      nail_style: formState.nail_style,
      cost: formState.cost
    }
    addOrder(newOrder).then((newOrder) => {
      dispatch({
        type: 'setOrders',
        data: [newOrder, ...orders]
      })
      
      history.push(`/order/confirm/${newOrder._id}`)
    }).catch((error) => {
      const status = error.response ? error.response.status : 500
      console.log('Caught error on edit', error)
      if(status === 403)
                setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
            else
                setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }
  const initialFormState = {
    // add auto-filled form if product selected from shop
    nail_length: 0,
    nail_shape: "",
    nail_style: "",
    cost: 0
  } 
  const [formState,setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)
  const {store, dispatch} = useGlobalState()
  const {orders} = store

  return (
    <form enctype="multipart/form-data" id="newOrderForm" onSubmit={handleSubmit}>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
        <Block>
            <Label>Name</Label>
            <Input required type="text" name="name" placeholder="Enter your name" onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Address</Label>
            <TextArea required type="text" name="address" placeholder="Enter your address" onChange={handleChange}></TextArea>
        </Block>
        <Block>
            <Label>Email</Label>
            <Input required type="text" name="email" placeholder="Enter your email" onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Phone Number</Label>
            <Input required type="text" name="phone_number" placeholder="Enter your phone number" onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Nail Length</Label>
            <Input required type="text" name="nail_length" placeholder="Enter a nail length" onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Nail Shape</Label>
            <Input required type="text" name="nail_shape" placeholder="Enter a nail shape" onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Nail Style</Label>
            <Input required type="text" name="nail_style" placeholder="Enter a nail style" onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Cost</Label>
            <Input required type="text" name="cost" placeholder="Enter a price" onChange={handleChange}></Input>
        </Block>
        {/* change so unique? */}
        <input type="file" name="nails" />
        <Block>
            <InputButton type="submit" value="Submit order"></InputButton>
        </Block>
        
    </form>
  ) 

}

export default withRouter(NewOrder)