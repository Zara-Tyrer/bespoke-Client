import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {deleteOrder} from '../services/orderServices'
import {withRouter} from 'react-router-dom'
import {ErrorText, Button} from './StyledComponents'

const Order = ({history, order}) => {
  const {store, dispatch} = useGlobalState()
  const {orders} = store
  const [errorMessage, setErrorMessage] = useState(null)
  if (!order) return null

  const {name, address, email, phone_number, nail_length, nail_shape, nail_style, cost} = order 
  function handleDelete(event) {
    event.preventDefault()
    deleteOrder(order._id).then(() => {
      console.log("deleted order")
      const updatedOrders = orders.filter((item) => item._id !== order._id)
      dispatch({
          type: "setOrders",
          data: updatedOrders
      })
      history.push("/dashboard")
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
    history.push(`/orders/edit/${order._id}`)
  }

  return (
    <div>
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      <p>{name}</p>
      <p>{address}</p>
      <p>{email}</p>
      <p>{phone_number}</p>
      <p>{nail_style}</p>
      <p>{nail_length}</p>
      <p>{nail_shape}</p>
      <p>£{cost}.00</p>
      <div>
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleEdit}>Edit</Button>
      </div>
    </div>
  )
}

export default withRouter(Order)

