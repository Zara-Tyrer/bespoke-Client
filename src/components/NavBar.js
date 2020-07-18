import React from 'react';
import {Nav, Row, Logo} from './StyledComponents'


const NavBar = () => {
  const imageStyles = {
    height: "30vh"
  } 
  const navContainer = {
    display: "flex",
    width: "100vw", 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FFFF"
  } 

  return (
    <Row> 
      <div style={navContainer}>
          <Nav to="/lookbook">LOOKBOOK</Nav>
          <Nav to="/about">ABOUT</Nav>
          <Nav to="/giftcards">GIFT CARDS</Nav>
          <Logo to="/"><img style={imageStyles} src="logo.png" alt="logo"></img></Logo>
          <Nav to="/contact">CONTACT</Nav>
          <Nav to="/shop">SHOP</Nav>
          <Nav to="/shop">ORDER NOW</Nav>
      </div>
    </Row>
  )
}

export default NavBar