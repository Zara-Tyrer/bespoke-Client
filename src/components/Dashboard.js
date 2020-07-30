import React, {useState, useEffect} from 'react';
import Order from './Order'
import Query from './Query'
import DashboardNav from './DashboardNav'
import {useGlobalState} from '../config/store'
import {DashboardContainer} from './StyledComponents'
import {DashGrid, DashCol} from './StyledComponentC'


const Dashboard = () => {
  const {store} = useGlobalState()
  const {orders, queries} = store
  
  const [ordersToDisplay, setOrdersToDisplay]= useState([]) 
  const [queriesToDisplay, setQueriesToDisplay]= useState([])

  useEffect(() => {
    setOrdersToDisplay(orders.slice(0, 4))
    setQueriesToDisplay(queries.slice(0, 4))
  }, [orders], [queries])
  
  return (
    <DashboardContainer>
    <DashboardNav></DashboardNav>
    <DashGrid>
    <div>
      <h2>RECENT ORDERS</h2>
      <DashCol>
        {ordersToDisplay.map((order) => <Order key={order._id} order={order} />)}
      </DashCol>
    </div>
    <div>
      <h2 style={{ marginBottom: "1.5em"}}>RECENT QUERIES</h2>
      {queriesToDisplay.map((query) => <Query key={query._id} query={query} />)}
    </div>
    </DashGrid>
    </DashboardContainer>
  )
}


export default Dashboard

