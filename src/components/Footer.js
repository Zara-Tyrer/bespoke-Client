import React from 'react'
import {FooterLink, RowFooter, FooterContainer, NavBlock, AdminLoginButton} from './StyledComponents'
import {useGlobalState} from '../config/store'

const Footer = () => {
  const {store} = useGlobalState()
  const {loggedInUser} = store

  const title = {
    fontSize: "1.2em",
    textDecoration: "none",
    color: "#525252",
    margin: "0.2em",
    padding: ".2em .5em",
    fontFamily: "Cabin"
  } 
  const diamond = {
    width: "2.5em"
  }
  const addressContainer = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
  const address = {
    padding: "0px", 
    color: "#525252",
    fontFamily: "Cabin"
  }
  const socials = {
    width: "1.2em",
    padding: "0.3em"
  } // change to link to socials

  return (
    <RowFooter> 
      <FooterContainer>
          <NavBlock>
            <p style={title}>EXPLORE</p>
            <FooterLink to="/lookbook">LOOKBOOK</FooterLink>
            <FooterLink to="/about">ABOUT</FooterLink>
            <FooterLink to="/giftcards">GIFT CARDS</FooterLink>
          </NavBlock>
          <NavBlock>
            <p><img style={diamond} src="diamond.png" alt="diamond"></img></p>
            <div style={addressContainer}>
              <div style={address}>138a High Street</div>
              <div style={address}>Sidmouth</div>
              <div style={address}>EX10 8EE</div>
            </div>
            <p style={title}>+44 7837 693909</p>
            {!loggedInUser ? <AdminLoginButton to="/admin/login" data-cy="login">ADMIN LOGIN</AdminLoginButton> : <AdminLoginButton to="/dashboard">DASHBOARD</AdminLoginButton>}
          </NavBlock>
          <NavBlock>
            <p style={title}>COMPANY</p>
            <FooterLink to="/contact">CONTACT</FooterLink>
            <FooterLink to="/products">SHOP</FooterLink>
            <div>
              <img style={socials} src="instagram.png" alt="instagram"></img>
              <img style={socials} src="twitter.png" alt="twitter"></img>
              <img style={socials} src="facebook.png" alt="facebook"></img>
            </div>
          </NavBlock>
      </FooterContainer>
    </RowFooter>
  )
}

export default Footer