import React, {useState} from 'react';
import {useGlobalState} from '../config/store'
import {deleteProduct} from '../services/productServices'
import {withRouter} from 'react-router-dom'
import {ButtonProduct, OrderLink, ProductContainer, ProductCard, ProductButtons, ProductInfo} from './StyledComponents'

const Product = ({history, product}) => {
  const {store, dispatch} = useGlobalState()
  const {products, loggedInUser} = store
  const [errorMessage, setErrorMessage] = useState(null)
  if (!product) return null

  const {nail_length, nail_shape, nail_style, cost, image} = product 
  // show edit and delete buttons when admin logged in
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
  }
  const floatRight = {
    float: "right"
  }

  return (
    <ProductContainer>
      {errorMessage && alert(errorMessage)}
      <ProductCard>
      <img style={productImage} src={image.fileLink} alt="product"></img>
      <div style={productDetails}>
        <span style = {floatRight}>£{cost}.00</span>
        {!loggedInUser && (<OrderLink onClick={handleOrder}>Order</OrderLink>)}
      </div>
      {allowEditDelete && (
        <div>
          <ProductInfo>Nail Length <span style={floatRight}>{nail_length}</span></ProductInfo>
          <ProductInfo>Nail Shape <span style={floatRight}>{nail_shape}</span></ProductInfo>
          <ProductInfo>Nail Style <span style={floatRight}>{nail_style}</span></ProductInfo>
          <ProductButtons>
              <ButtonProduct onClick={handleDelete}>Delete</ButtonProduct>
              <ButtonProduct onClick={handleEdit}>Edit</ButtonProduct>
          </ProductButtons>
        </div>
      )}
      </ProductCard>
    </ProductContainer>
  )
}

export default withRouter(Product)