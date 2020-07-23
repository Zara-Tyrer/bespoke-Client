import React from 'react'
import Order from './Order'
import {useGlobalState} from '../config/store'
import {OrdersContainer} from './StyledComponents'
import DashboardNav from './DashboardNav'
import Dashboard from './Dashboard'

const Orders = () => {
  const {store} = useGlobalState()
  const {orders} = store 

  return (
    <OrdersContainer>
    <DashboardNav></DashboardNav>
      {orders.map((order) => <Order key={order._id} order={order} />)}
    </OrdersContainer>
  )
}

export default Orders