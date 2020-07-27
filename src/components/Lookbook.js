import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import {ShopLink} from './StyledComponents'

const Lookbook = () => {
  const instagramContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
  const instaPics = {
    display: "flex",
  }
  const bespokeLink = {
    textDecoration: "none",
    fontSize: "2em",
    marginBottom: "1.3em",
    marginTop: "1em",
    fontFamily: "Abel",
    color: "#525252"
  }
  const designs = {
    fontFamily: "Abel",
    color: "#525252", 
    fontSize: "1.5em"
  }
  const instaPic = {
    marginLeft: "5vw", 
  }


  return (
    <div style={instagramContainer}>
    <a style={bespokeLink} href="https://www.instagram.com/bespoke_nails_/">@bespoke_nails_</a>
    <p style={designs}>Checkout my designs  💅🏼 </p>
    <div>
      <div style={instaPics}>
        <InstagramEmbed 
          style={instaPic}
          url='https://www.instagram.com/p/CBn7A7EDxGn/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
          />
        <InstagramEmbed
          style={instaPic}
          url='https://www.instagram.com/p/CBhte3WDAyj/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed 
          style={instaPic}
          url='https://www.instagram.com/p/CAdZE0lDUrM/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
      <div style={instaPics}>
        <InstagramEmbed 
          style={instaPic}
          url='https://www.instagram.com/p/CB04woTD5qM/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed 
          style={instaPic}
          url='https://www.instagram.com/p/B-cYnorDY10/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <InstagramEmbed 
          style={instaPic}
          url='https://www.instagram.com/p/B_4a1lsAUTH/'
          maxWidth={320}
          hideCaption={true}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        </div>
      </div>
      <p style={designs}>Customise your own set of press ons</p>
      <ShopLink to="/products">SHOP</ShopLink>
    </div>
  )
}

export default Lookbook