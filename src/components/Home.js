import React from 'react';
// import {useGlobalState} from '../config/store'
// import {getOrderFromId} from '../services/orderServices'
import {HomeWrapper, HomeTopRow, OrderNowHome, TopLeft, TopRight, 
  HomeHeading, HomeSubHead, HomeMidRow, MidRight, MidLeft, Lookbook, 
  LookWrite, Circle, Giftcard, Squad, ThirdRow, InstaLink, InstaPics, 
  Pic, MidRightTop, InstagramHome, Peek, GrabGC} from './StyledComponentC'

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
              <img style={{width:"18em"}}src="/lookbookIcon.jpg" alt="lookbook" ></img>
            </Lookbook>
            <LookWrite>
              <div>THE</div>
              <div>LOOKBOOK</div>
              <Peek to="/lookbook">TAKE A PEEK</Peek>
            </LookWrite>
          </MidLeft>
          <MidRight>
            <MidRightTop>
              <Circle>
              <Giftcard src="/giftcard.png" alt="giftcard"></Giftcard>
                <Squad>
                  <div>Treat</div>
                  <div>your</div>
                  <div>Squad.</div> 
                </Squad>
              </Circle>
            </MidRightTop>
            <div style={{display: "flex", justifyContent:"center", padding:"2%", margin:"2%"}}>
                <GrabGC to="/lookbook">GRAB A GIFT CARD</GrabGC>
            </div>
          </MidRight>
        </HomeMidRow>
        <ThirdRow>
          <InstaLink>
            <InstagramHome href="https://www.instagram.com/bespoke_nails_/">@bespoke_nails_</InstagramHome>
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