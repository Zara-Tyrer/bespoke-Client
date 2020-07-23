import React from 'react';
import DashboardNav from './DashboardNav'
import Order from './Order'
import {useGlobalState} from '../config/store'
import {DashboardContainer} from './StyledComponents'
//import Queries from './Queries';


const Dashboard = () => {
  const {store} = useGlobalState()
  const {orders} = store

  return (
    <DashboardContainer>
      <DashboardNav></DashboardNav>
      {orders.map((order) => <Order key={order._id} order={order} />)}
     
    </DashboardContainer>
  )
}


export default Dashboard

