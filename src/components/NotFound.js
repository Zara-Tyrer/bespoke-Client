import React from 'react';
import {NotFoundContainer, BackLink} from './StyledComponents'

const NotFound = () => {
  const notFoundLogo = {
    width: "30vw",
    margin: "0em 1em 1em 1em"
  }

  return (
    <NotFoundContainer>
      <BackLink to="/">Back to Homepage</BackLink>
      <img style={notFoundLogo} src="404.png" alt="404 page not found"></img>
    </NotFoundContainer>
  )
}

export default NotFound