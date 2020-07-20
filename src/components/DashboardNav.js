import React from 'react';
import {useGlobalState} from '../config/store'
import {DashboardNavDiv, AdminSide, DashboardLink} from './StyledComponents'
import {logOutUser} from '../services/authServices'


const DashboardNav = () => {

  function handleLogout() {
    logOutUser().then((response) => {
        console.log("Got back response on logout", response.status)
    }).catch ((error) => {
        console.log("The server may be down - caught an exception on logout:", error)
    })
    dispatch({
        type: "setLoggedInUser",
        data: null
    })
}

  const {store, dispatch} = useGlobalState()
  const {loggedInUser} = store

  const profilePicStyles = {
    width: "7em",
    padding: "2em",
    borderRadius: "50%"

  }
  

  return (
    <AdminSide> 
      <DashboardNavDiv>
        <img style={profilePicStyles} src="profile-pic.png" alt="profile"></img>
        <div>{loggedInUser}</div>
        <DashboardLink onClick={handleLogout} to="/">Logout</DashboardLink>
        <DashboardLink to="orders">ORDERS</DashboardLink>
        <DashboardLink to="/queries">QUERIES</DashboardLink>
        <DashboardLink to="/products">SHOP</DashboardLink>
      </DashboardNavDiv>
    </AdminSide>
  )
}

export default DashboardNav