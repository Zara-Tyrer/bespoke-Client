import React from 'react';
import {useGlobalState} from '../config/store'
import {getOrderFromId} from '../services/orderServices'
import {Link} from 'react-router-dom'
import {HomeWrapper, HomeTopRow, OrderNowHome, TopLeft, TopRight, 
  HomeHeading, HomeSubHead, HomeMidRow, MidRight, MidLeft, Lookbook, LookWrite, Circle, Giftcard } from './StyledComponentC'



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
              <OrderNowHome>MAKE AN ORDER</OrderNowHome>
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
            <Circle>
              <Giftcard src="/giftcard.png"></Giftcard>
            </Circle>
            <div>
              <div>Treat</div>
              <div>your</div>
              <div>Squad.</div>
            </div>
          </MidRight>

        </HomeMidRow>

      </HomeWrapper>
    </div>
  )


}



export default Home