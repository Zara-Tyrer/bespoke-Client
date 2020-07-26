import React from 'react';
// import {useGlobalState} from '../config/store'
// import {getOrderFromId} from '../services/orderServices'
import {Link} from 'react-router-dom'
import {HomeWrapper, HomeTopRow, OrderNowHome, TopLeft, TopRight, 
  HomeHeading, HomeSubHead, HomeMidRow, MidRight, MidLeft, Lookbook, LookWrite, Circle, Giftcard, Squad, ThirdRow, InstaLink, InstaPics, Pic} from './StyledComponentC'

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
              <img style={{width:"250px"}}src="/lookbookIcon.jpg" ></img>
            </Lookbook>
            <LookWrite>
              <div>THE</div>
              <div>LOOKBOOK</div>
              <Link to="/lookbook" >TAKE A PEEK</Link>
            </LookWrite>
          </MidLeft>
          <MidRight>
            <div style={{display:"flex", margin:"4em"}}>
              <Circle>
                <Giftcard src="/giftcard.png">
                </Giftcard>
              </Circle>
              <Squad>
                  <div>Treat</div>
                  <div>Your</div>
                  <div>Squad.</div> 
              </Squad>
              </div>
            <div style={{fontSize:"50px", display: "flex", justifyContent:"center", paddingBottom:"2%"}}>
                <Link to="/lookbook">GRAB A GIFT CARD</Link>
            </div>
          </MidRight>
          
        </HomeMidRow>
        <ThirdRow>
          <InstaLink>
            <a href="https://www.instagram.com/bespoke_nails_/">@bespoke_nails_</a>
          </InstaLink>
          <InstaPics>
            <Pic src="/nails1.png"></Pic>
            <Pic src="/nails2.png"></Pic>
            <Pic src="/nails3.png"></Pic>
            <Pic src="/nails4.png"></Pic>
            <Pic src="/nails5.png"></Pic>
          </InstaPics>
        </ThirdRow>

      </HomeWrapper>
    </div>
  )


}



export default Home