import React, {useState} from 'react'
import {useGlobalState} from '../config/store'
import {deleteOrder, updateOrder} from '../services/orderServices'
import {withRouter} from 'react-router-dom'
import {OrderButton, OrderContainer, OrderInfoDiv, OrderNameDiv, OrderButtons} from './StyledComponents'

const Order = ({history, order}) => {
  const {store, dispatch} = useGlobalState()
  const {orders} = store
  const [errorMessage, setErrorMessage] = useState(null)
  if (!order) return null

  const {name, address, email, phone_number, nail_length, nail_shape, nail_style, cost, date_created, completed, image} = order 
  function handleDelete(event) {
    event.preventDefault()
    deleteOrder(order._id).then(() => {
      console.log("deleted order")
      const updatedOrders = orders.filter((item) => item._id !== order._id)
      dispatch({
          type: "setOrders",
          data: updatedOrders
      })
      history.push("/orders")
    }).catch((error) => {
        const status = error.response ? error.response.status : 500
        console.log("caught error on edit", error)
        if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
  }

  //formatting date
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
  let dateFormat = new Date(date_created)
  let formattedDate = dateFormat.getDate() + "/" + monthNames[dateFormat.getMonth()] + "/" + dateFormat.getFullYear()

  
  function handleCompleted(event) {
    event.preventDefault()
    const updatedOrder = {
      ...order, 
      completed: true
    }

    updateOrder(updatedOrder).then(() => {
        const otherOrders = orders.filter((order) => order._id !== updatedOrder._id)
        dispatch({
            type: "setOrders",
            data: [updatedOrder, ...otherOrders]
        })
        history.push(`/dashboard`)
    }).catch((error) => {
        const status = error.response ? error.response.status : 500
        console.log("caught error on changing complete", error)
        if(status === 403)
            setErrorMessage("Oops! It appears we lost your login session. Make sure 3rd party cookies are not blocked by your browser settings.")
        else
            setErrorMessage("Well, this is embarrassing... There was a problem on the server.")
    })
}
  const completedIcon = {
    width: "1em",
  }

  const imageStyle = {
    width: "10em",
    height: "10em",
    borderRadius: "50px 0px",
    marginBottom: "2em",
    marginLeft: "auto",
    marginRight: "auto"
  }
  const floatRight = {
    float: "right"
  }

  return (
    <OrderContainer>
      {errorMessage && alert(errorMessage)}
      <img style={imageStyle} src={image.fileLink} alt="nails"></img>
      <OrderNameDiv><b>Name</b> <span style={floatRight}>{name}</span></OrderNameDiv>
      <OrderInfoDiv><b>Address</b> <span style={floatRight}>{address}</span></OrderInfoDiv>
      <OrderInfoDiv><b>Email</b><span style={floatRight}>{email}</span></OrderInfoDiv>
      <OrderInfoDiv><b>Number</b><span style={floatRight}>{phone_number}</span></OrderInfoDiv>
      <OrderInfoDiv><b>Nail style</b><span style={floatRight}>{nail_style}</span></OrderInfoDiv>
      <OrderInfoDiv><b>Nail length</b><span style={floatRight}>{nail_length}mm</span></OrderInfoDiv>
      <OrderInfoDiv><b>Nail shape</b><span style={floatRight}>{nail_shape}</span></OrderInfoDiv>
      <OrderInfoDiv><b>Price</b><span style={floatRight}>£{cost}.00</span></OrderInfoDiv>
      <OrderInfoDiv><b>Order date</b><span style={floatRight}>{formattedDate}</span></OrderInfoDiv>
      <OrderInfoDiv><b>Completed  </b>{completed ? (<img style={completedIcon} src="tick.png" alt="tick"></img>) : (<img style={completedIcon} src="close.png" alt="cross"></img>)}</OrderInfoDiv>
      
      <OrderButtons>
            <OrderButton data-cy="completedOrder" onClick={handleCompleted}>Completed</OrderButton>
            <OrderButton onClick={handleDelete}>Delete</OrderButton>
      </OrderButtons>
    </OrderContainer>
  )
}

export default withRouter(Order)

