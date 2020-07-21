import React from 'react'
import Order from './Order'
import {useGlobalState} from '../config/store'
import {DashboardButton} from './StyledComponents'

const Orders = () => {
  const {store} = useGlobalState()
  const {orders} = store 

  return (
    <div>
      {orders.map((order) => <Order key={order._id} order={order} />)}
      <DashboardButton to="/dashboard">Back to Dashboard</DashboardButton>
    </div>
  )
}

export default Orders