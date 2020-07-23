import React from 'react';
import {useGlobalState} from '../config/store'
import {getOrderFromId} from '../services/orderServices'
import {Link} from 'react-router-dom'
import {Wrapper, ConfirmationBox} from './StyledComponentC'

const OrderConfirm = ({history, match}) => {
  const {store} = useGlobalState()
  const {orders} = store
  const orderId = match.params.id
  const order = getOrderFromId(orders, orderId)
  // const [errorMessage, setErrorMessage] = useState(null)
  if (!order) return null

  const {name, nail_length, nail_shape, nail_style} = order

  const bigCheck = {
    width: "4em"
  }
  
  return (
    <div>
      <Wrapper>
        <ConfirmationBox>
          <div style={{margin:"auto"}}>
              <img style={bigCheck} src={'/tick.png'} alt="tick"></img>
            </div>
          <h3>Thanks for placing an order for {nail_length}mm, {nail_shape} {nail_style} press-ons, {name}!</h3>
          <p>Your order confirmation number is #{order._id}</p>
          <p>We'll be in touch soon about estimated completion and payment details.</p>
          <div>
            <Link to="/">Back to the homepage</Link>
          </div>      
        </ConfirmationBox>
      </Wrapper>
    </div>
  )
}


export default OrderConfirm