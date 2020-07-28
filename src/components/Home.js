import React from 'react';
// import {useGlobalState} from '../config/store'
// import {getOrderFromId} from '../services/orderServices'
import {Link} from 'react-router-dom'
import {HomeWrapper, HomeTopRow, OrderNowHome, TopLeft, TopRight, 
  HomeHeading, HomeSubHead, HomeMidRow, MidRight, MidLeft, Lookbook, 
  LookWrite, Circle, Giftcard, Squad, ThirdRow, InstaLink, InstaPics, 
  Pic, MidRightTop, LinkText} from './StyledComponentC'

const Home = () => {

  return (
    <div>
      <HomeWrapper>
        <HomeTopRow>
          <TopLeft>
            <div>
              <HomeHeading>YOU'RE NEVER</HomeHeading>
              <HomeHeading>FULLY DRESSED</HomeHeading>
              <HomeHeading>WITHOUT A GOOD</HomeHeading>
              <HomeHeading>SET OF NAILS.</HomeHeading>
            </div>
            <HomeSubHead>
              <div>Nail Salon in Sidmouth,</div>
              <div>Devon. Come see what</div>
              <div>we are all about.</div>
            </HomeSubHead>
          </TopLeft>
          <TopRight>
            <div>
              <OrderNowHome to="/products">MAKE AN ORDER</OrderNowHome>
            </div>
          </TopRight>
        </HomeTopRow>
        <HomeMidRow>
          <MidLeft>
            <Lookbook>
              <img style={{width:"250px"}}src="/lookbookIcon.jpg" alt="lookbook" ></img>
            </Lookbook>
            <LookWrite>
              <div>THE</div>
              <div>LOOKBOOK</div>
              <Link to="/lookbook" >TAKE A PEEK</Link>
            </LookWrite>
          </MidLeft>
          <MidRight>
            <MidRightTop>
              <Circle>
              <Giftcard src="/giftcard.png" alt="giftcard"></Giftcard>
                <Squad>
                  <div>Treat</div>
                  <div>Your</div>
                  <div>Squad.</div> 
                </Squad>
              </Circle>
            </MidRightTop>
            <div style={{fontSize:"50px", display: "flex", justifyContent:"center", padding:"2%", margin:"2%"}}>
                <Link to="/lookbook">
                  <LinkText>GRAB A GIFT CARD</LinkText>
                </Link>
            </div>
          </MidRight>
        </HomeMidRow>
        <ThirdRow>
          <InstaLink>
            <a href="https://www.instagram.com/bespoke_nails_/">@bespoke_nails_</a>
          </InstaLink>
          <InstaPics>
            <Pic src="/nails1.png" alt="nails"></Pic>
            <Pic src="/nails2.png" alt="nails"></Pic>
            <Pic src="/nails3.png" alt="nails"></Pic>
            <Pic src="/nails4.png" alt="nails"></Pic>
            <Pic src="/nails5.png" alt="nails"></Pic>
          </InstaPics>
        </ThirdRow>

      </HomeWrapper>
    </div>
  )


}



export default Home