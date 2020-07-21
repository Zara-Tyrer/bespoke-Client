import React from 'react'
import Query from './Query'
import {useGlobalState} from '../config/store'
import {DashboardButton} from './StyledComponents'

const Queries = () => {
  const {store} = useGlobalState()
  const {queries} = store

  return (
    <div>
      <div>
      <DashboardButton to="/dashboard">Back to Dashboard</DashboardButton>
      </div>
      <div>
        {queries.sort((a,b) => a.date_created.toLocaleString() - b.date_created.toLocaleString()).map((query) => <Query key={query._id} query={query} />)}
      </div>
    </div>
  )
}

export default Queries