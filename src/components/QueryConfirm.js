import React from 'react';
import {useGlobalState} from '../config/store'
import {getQueryFromId} from '../services/queryServices'
import {Link} from 'react-router-dom'
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
  backgroundImage: `url(${'/backgroundWater.png'})`,
  padding: "5em",
  borderRadius: "30px"
}

const bigCheck = {
  width: "4em",
  margin: "auto"
}

const wrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "6em",
  marginBottom: "6em"
}


  return (
    <div style={wrapper}>
      <div style={queryConfirmation}>
        <div>
          <img src="tick.png" alt="logo"></img>
        </div>
        <h3>Thanks for getting in touch, {name}</h3>
        <p>Your query confirmation number is #{query._id}</p>
        <div>
          <Link to="/">Back to the homepage</Link>
        </div>
      </div>  
    </div>
  )
}


export default QueryConfirm