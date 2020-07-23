import React from 'react';
import Order from './Order'
import Query from './Query'
import DashboardNav from './DashboardNav'
import {useGlobalState} from '../config/store'
import {DashboardContainer} from './StyledComponents'


const Dashboard = () => {
  const {store} = useGlobalState()
  const {orders, queries} = store

  console.log(orders)

  return (
    <DashboardContainer>
    <DashboardNav></DashboardNav>
      {orders.map((order) => <Order key={order._id} order={order} />)}
      {queries.map((query) => <Query key={query._id} query={query} />)}
    
       
    </DashboardContainer>
  )
}


export default Dashboard

