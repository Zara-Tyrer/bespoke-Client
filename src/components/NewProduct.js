import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {addProduct} from '../services/productServices'
import { Block, Input, Label, InputButton, ErrorText} from './StyledComponents'


const NewProduct = ({history}) => {

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
    const newProduct = {
      nail_length: formState.nail_length,
      nail_shape: formState.nail_shape,
      nail_style: formState.nail_style,
      cost: formState.cost
    }
    addProduct(newProduct).then((newProduct) => {
      dispatch({
        type: 'setProducts',
        data: [newProduct, ...products]
      })
      history.push(`/products/${newProduct._id}`)
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
  const {products} = store

  return (
    <form id="newProductForm" onSubmit={handleSubmit}>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
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
        <Block>
            <InputButton type="submit" value="Add product"></InputButton>
        </Block>
    </form>
  ) 

}

export default withRouter(NewProduct)
