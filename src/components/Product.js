import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {deleteProduct} from '../services/productServices'
import { Button, ErrorText} from './StyledComponents'

const Product = ({history, product, showControls}) => {
  const {store, dispatch} = useGlobalState()
  const {products, loggedInUser} = store
  const [errorMessage, setErrorMessage] = useState(null)
  if (!product) return null

  const {nail_length, nail_shape, nail_style, cost} = product 
  const allowEditDelete = loggedInUser 
  function handleDelete(event) {
    event.preventDefault()
    deleteProduct(product._id).then(() => {
      console.log("deleted product")
      const updatedProducts = products.filter((item) => item._id !== product._id)
      dispatch({
          type: "setProducts",
          data: updatedProducts
      })
      history.push("/products")
    }).catch((error) => {
        const status = error.response ? error.response.status : 500
        console.log("caught error on edit", error)
        if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }

  function handleEdit(event) {
    event.preventDefault()
    history.push(`/products/edit/${product._id}`)
  }

  return (
    <div>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <p>{nail_style}</p>
      <p>{nail_length}</p>
      <p>{nail_shape}</p>
      <p>£{cost}.00</p>
      {showControls && allowEditDelete && (
          <div>
              <Button data-cy="delete" onClick={handleDelete}>Delete</Button>
              <Button onClick={handleEdit}>Edit</Button>
          </div>
      )}
    </div>
  )
}

export default Product