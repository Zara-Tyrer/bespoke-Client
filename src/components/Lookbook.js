import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const Lookbook = () => {
  const instagramContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  const instaPics = {
    display: "flex"
  }

  const bespokeLink = {
    textDecoration: "none",
    fontSize: "3.2em",
    marginBottom: "2em",
    marginTop: "1em",
    fontFamily: "Abel",
    color: "#525252"
  }

  const designs = {
    fontFamily: "Abel",
    color: "#525252", 
    fontSize: "1.8em"
  }

  return (
    <div style={instagramContainer}>
    <a style={bespokeLink} href="https://www.instagram.com/bespoke_nails_/">@bespoke_nails_</a>
    <p style={designs}>Checkout my designs  💅🏼 </p>
    
    <div style={instaPics}>
      <InstagramEmbed
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
      </div>
    </div>
  )
}

export default Lookbook