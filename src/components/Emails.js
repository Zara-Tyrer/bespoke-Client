import React from 'react'
import Email from './Email'
import {useGlobalState} from '../config/store'
import DashboardNav from './DashboardNav'
import {EmailsContainer} from './StyledComponents'


const Emails = () => {
  const {store} = useGlobalState()
  const {emails} = store

  const dashStyles = {
    display: "flex",
    width: "100vw"
  }

  return (
    <div style={dashStyles}>
      <DashboardNav />
        <EmailsContainer>{emails.map((email) => <Email key={email._id} email={email} />)}</EmailsContainer>
    </div>
  )
}

export default Emails