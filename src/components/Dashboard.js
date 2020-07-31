import React, {useState, useEffect} from 'react';
import Order from './Order'
import Query from './Query'
import DashboardNav from './DashboardNav'
import {useGlobalState} from '../config/store'
import {DashboardContainer} from './StyledComponents'
import {DashGrid, DashCol} from './StyledComponentC'

//Dashboard is landing page for Admin once logged in

const Dashboard = () => {
  const {store} = useGlobalState()
  const {orders, queries} = store
  
//Dashboard is a summary of recent queries and orders so use effect is used below 
//to select the first 4 items in orders and queries to display on dash 
//upon first render (without local state useEffect will need a refresh to load)

  const [ordersToDisplay, setOrdersToDisplay]= useState([]) 
  const [queriesToDisplay, setQueriesToDisplay]= useState([])

  useEffect(() => {
    setOrdersToDisplay(orders.slice(0, 4))
    setQueriesToDisplay(queries.slice(0, 4))
  }, [orders, queries])
  
  //dashboard is rendered as a grid with orders on the left and queries on the right - see Styled Components files for CSS
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
      <h2 style={{ marginBottom: "1em"}}>RECENT QUERIES</h2>
      <DashCol>
        {queriesToDisplay.map((query) => <Query key={query._id} query={query} />)}
      </DashCol>
    </div>
    </DashGrid>
    </DashboardContainer>
  )
}


export default Dashboard

