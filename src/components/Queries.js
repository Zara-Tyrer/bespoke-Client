import React from 'react'
import Query from './Query'
import {useGlobalState} from '../config/store'
import DashboardNav from './DashboardNav'
// import { findByLabelText } from '@testing-library/react'

const Queries = () => {
  const {store} = useGlobalState()
  const {queries} = store


  const dashStyles = {
    display: "flex",
    width: "100vw"
  }
  
  const queriesStyles = {
    display: "flex",
    flexWrap: "wrap",
    width: "100vw"
  }

  return (
    <div>
      <div style={dashStyles}>
        <DashboardNav />
        <div style={queriesStyles}>
          {queries.map((query) => <Query key={query._id} query={query} />)}
        </div>
      </div>
    </div>
  )
}

export default Queries