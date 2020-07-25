import React from 'react';
import {useGlobalState} from '../config/store'
import {getQueryFromId} from '../services/queryServices'
import {Link} from 'react-router-dom'
import {Wrapper, ConfirmationBox} from './StyledComponentC'

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
          <p>Your query confirmation number is #{query._id}</p>
          <div>
            <Link to="/">Back to the homepage</Link>
          </div>
        </ConfirmationBox>  
      </Wrapper>
    </div>
  )
}


export default QueryConfirm