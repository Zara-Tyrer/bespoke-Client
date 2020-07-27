import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {deleteProduct} from '../services/productServices'
import {withRouter} from 'react-router-dom'
import {Button, ErrorText, OrderLink, ProductContainer, ProductCard} from './StyledComponents'

const Product = ({history, product}) => {
  const {store, dispatch} = useGlobalState()
  const {products, loggedInUser} = store
  const [errorMessage, setErrorMessage] = useState(null)
  if (!product) return null

  const {nail_length, nail_shape, nail_style, cost, image} = product 
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

  function handleOrder(event) {
    event.preventDefault()
    history.push(`/orders/edit/${product._id}`)
  }

  const productImage = {
    width: "15vw",
    height: "15vw",
  }

  const productDetails = {
    display: "flex",
    justifyContent: "space-between",
    // margin: ".5em"
  }

  return (
    <ProductContainer>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <ProductCard>
      <img style={productImage} src={image.fileLink} alt="image"></img>
      <div style={productDetails}>
        £{cost}.00
        {!loggedInUser && (<OrderLink onClick={handleOrder}>Order</OrderLink>)}
      </div>
      {allowEditDelete && (
        <div>
          <div>{nail_length}</div>
          <div>{nail_shape}</div>
          <div>{nail_style}</div>
          <div>
              <Button onClick={handleDelete}>Delete</Button>
              <Button onClick={handleEdit}>Edit</Button>
          </div>
        </div>
      )}
      </ProductCard>
    </ProductContainer>
  )
}

export default withRouter(Product)