import React, {useState, useEffect} from 'react'
import {useGlobalState} from '../config/store'
import {withRouter} from 'react-router-dom'
import {getProductFromId, updateProduct} from '../services/productServices'
import {Block, Input, Label, InputButton} from './StyledComponents'

//Admin use to edit products in shop


const EditProduct = ({history, match}) => {
  //get products from store (global state)
  const {store, dispatch} = useGlobalState()
  const {products} = store
  const productId = match.params.id
  const product = getProductFromId(products, productId)

  //handle change in form and setFormstate
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
    //update product upon submit
    const updatedProduct = {
      _id: product._id,
      nail_shape: formState.nail_shape,
      nail_style: formState.nail_style,
      nail_length: formState.nail_length,
      cost: formState.cost
    }
    //calls async function update product (put request to server)
    updateProduct(updatedProduct).then(() => {
      // filter creates an array of all products besides the one just updated 
      const otherProducts = products.filter((product) => product._id !== updatedProduct._id)
      //set products in store with updated product and the array of all other non-updated products
      dispatch({
        type: "setProducts",
        data: [updatedProduct, ...otherProducts]
      })
      //send back to products once submitted
      history.push(`/products`)
    }).catch((error) => {
      //catch any errors, set error message in local state and raise an alert (see form) if error
        const status = error.response ? error.response.status : 500
        console.log("caught error on edit", error)
        if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
      })
  }

  // set the intital form state 
  const initialFormState = {
    nail_length: "",
    nail_shape: "",
    nail_style: "",
    cost: null
  }

  //local state
  const [formState,setFormState] = useState(initialFormState)
  const [errorMessage, setErrorMessage] = useState(null)

  //hook to set formState after render with 
  useEffect(() => {
    product && setFormState({
      nail_length: product.nail_length,
      nail_shape: product.nail_shape,
      nail_style: product.nail_style,
      cost: product.cost
    })
  },[product])

  return (
    <form id="editProductForm" onSubmit={handleSubmit}>
        {errorMessage && alert(errorMessage)}
        <Block>
            <Label>Nail Length</Label>
            <Input required type="text" name="nail_length" placeholder="Enter a nail length" value={formState.nail_length} onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Nail Shape</Label>
            <Input required type="text" name="nail_shape" placeholder="Enter a nail shape" value={formState.nail_shape} onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Nail Style</Label>
            <Input required type="text" name="nail_style" placeholder="Enter a nail style" value={formState.nail_style} onChange={handleChange}></Input>
        </Block>
        <Block>
            <Label>Cost</Label>
            <Input required type="text" name="cost" placeholder="Enter a price" value={formState.cost} onChange={handleChange}></Input>
        </Block>
        <Block>
            <InputButton type="submit" value="Update product"></InputButton>
        </Block>
    </form>
  ) 

}

export default withRouter(EditProduct)