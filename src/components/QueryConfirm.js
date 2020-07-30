import React from 'react';
import {useGlobalState} from '../config/store'
import {getQueryFromId} from '../services/queryServices'
import {Link} from 'react-router-dom'
import {Wrapper, ConfirmationBox, BackHome} from './StyledComponentC'

// import {ErrorText} from './StyledComponents'

const QueryConfirm = ({history, match}) => {
  const {store} = useGlobalState()
  const {queries} = store
  const queryId = match.params.id
  const query = getQueryFromId(queries, queryId)
  // const [errorMessage, setErrorMessage] = useState(null)
  if (!query) return null

  const {name} = query

  const bigCheck = {
    width: "7em"
  }

  return (
    <div>
      <Wrapper>
        <ConfirmationBox>
          <div style={{margin:"auto"}}>
            <img style={bigCheck} src={'/check.png'} alt="tick"></img>
          </div>
          <h3>Your query has been successfully submitted.</h3>
          <p>Thanks for contacting us, {name}, we'll be in touch soon.</p>
          <p>Your query confirmation number is: </p>
          <p>#{query._id}</p>
          <div style={{marginTop: "4em"}}>
            <BackHome to="/">BACK TO HOMEPAGE</BackHome>
          </div>
        </ConfirmationBox>  
      </Wrapper>
    </div>
  )
}


export default QueryConfirm