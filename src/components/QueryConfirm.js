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

const queryConfirmation = {
  display: "flex",
  flexDirection: "column",
  margin: "1em",
  // backgroundImage: `url(${'/backgroundWater.png'})`,
  padding: "5em",
  borderRadius: "30px"
}

const bigCheck = {
  width: "4em"
}

const wrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "6em",
  marginBottom: "6em"
}


  return (
    <div>
      <Wrapper>
        <ConfirmationBox>
          <div style={{margin:"auto"}}>
            <img style={bigCheck} src={'/tick.png'} alt="tick"></img>
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