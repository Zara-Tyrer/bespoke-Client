import React from 'react'
import Order from './Order'
import {useGlobalState} from '../config/store'
import {OrdersContainer} from './StyledComponents'
import DashboardNav from './DashboardNav'


const dashStyles = {
  display: "flex",
  width: "100vw"
}

const Orders = () => {
  const {store} = useGlobalState()
  const {orders} = store 

  return (
    <div style={dashStyles}>
      <DashboardNav></DashboardNav>
      <OrdersContainer>
        {orders.map((order) => <Order key={order._id} order={order} />)}
      </OrdersContainer>
    </div>
  )
}

export default Orders