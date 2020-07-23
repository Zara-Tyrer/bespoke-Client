import React from 'react';
import Order from './Order'
import Query from './Query'
import DashboardNav from './DashboardNav'
import {useGlobalState} from '../config/store'
import {DashboardContainer} from './StyledComponents'


const Dashboard = () => {
  const {store} = useGlobalState()
  const {orders, queries} = store

  const ordersToDisplay = orders.slice(0, 2)
  const queriesToDisplay = queries.slice(0, 2)

  return (
    <DashboardContainer>
    <DashboardNav></DashboardNav>
      {ordersToDisplay.map((order) => <Order key={order._id} order={order} />)}
      {queriesToDisplay.map((query) => <Query key={query._id} query={query} />)}
    </DashboardContainer>
  )
}


export default Dashboard

