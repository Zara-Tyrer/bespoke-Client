import React from 'react';
import {useGlobalState} from '../config/store'
import {DashboardNavDiv, AdminSide, DashboardLink} from './StyledComponents'
import {logOutUser} from '../services/authServices'

//The Navigation pane for Admin that appears on the left side when logged in. 
//Contains links to admin actions to see all queries, all orders and link to the shop to add/edit/delete products (admin view only)

const DashboardNav = () => {

  //handle logout of admin and set logged in user (global state) to null 
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


// call in global state for user
  const {store, dispatch} = useGlobalState()
  const {loggedInUser} = store

  const profilePicStyles = {
    width: "7em",
    padding: "2em",
    borderRadius: "50%"
  }

  //admin dash links, using Link, see styled components for css (flex)
  return (
    <AdminSide> 
      <DashboardNavDiv>
        <img style={profilePicStyles} src="profile-pic.png" alt="profile"></img>
        <div style={{fontSize:"20px"}}>{loggedInUser}</div>
        <DashboardLink style={{fontSize:"15px"}} data-cy="logout" onClick={handleLogout} to="/">Logout</DashboardLink>
        <DashboardLink style={{borderTop: "2px solid white"}} to="/dashboard">DASHBOARD</DashboardLink>
        <DashboardLink to="orders">ORDERS</DashboardLink>
        <DashboardLink to="/query">QUERIES</DashboardLink>
        <DashboardLink data-cy="productLink" to="/products">SHOP</DashboardLink>
        <DashboardLink to="/admin/register">NEW ADMIN</DashboardLink>
        <DashboardLink to="emails">EMAIL LIST</DashboardLink>
      </DashboardNavDiv>
    </AdminSide>
  )
}

export default DashboardNav