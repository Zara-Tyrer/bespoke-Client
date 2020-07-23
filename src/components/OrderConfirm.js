import React from 'react';
import {useGlobalState} from '../config/store'
import {getOrderFromId} from '../services/orderServices'
// import {ErrorText} from './StyledComponents'

const OrderConfirm = ({history, match}) => {
  const {store} = useGlobalState()
  const {orders} = store
  const orderId = match.params.id
  const order = getOrderFromId(orders, orderId)
  // const [errorMessage, setErrorMessage] = useState(null)
  if (!order) return null

  const {name, nail_length, nail_shape, nail_style} = order



  return (
    <div>
      <h3>Thanks for placing an order for {nail_length}mm, {nail_shape} {nail_style} press-ons, {name}!</h3>
      <p>Your order confirmation number is #{order._id}</p>
      <p>We'll be in touch soon about estimated completion and payment details.</p>
    </div>
  )
}


export default OrderConfirm