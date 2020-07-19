import React from 'react'
import {FooterLink, RowFooter, FooterContainer, NavBlock} from './StyledComponents'

const Footer = () => {
  const title = {
    margin: "1em",
    padding: ".2em .5em"
  } 

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
            <p style={title}>Logo</p>
            <p style={title}>Address</p>
            <p style={title}>Number</p>
            <FooterLink to="/admin/login" data-cy="login">Admin Login</FooterLink>
          </NavBlock>
          <NavBlock>
            <p style={title}>COMPANY</p>
            <FooterLink to="/contact">CONTACT</FooterLink>
            <FooterLink to="/products">SHOP</FooterLink>
            <FooterLink to="/products">ORDER NOW</FooterLink>
          </NavBlock>
      </FooterContainer>
    </RowFooter>
  )
}

export default Footer