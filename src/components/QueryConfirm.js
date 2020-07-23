import React from 'react';
import {useGlobalState} from '../config/store'
import {getQueryFromId} from '../services/queryServices'
// import {ErrorText} from './StyledComponents'

const QueryConfirm = ({history, match}) => {
  const {store} = useGlobalState()
  const {queries} = store
  const queryId = match.params.id
  const query = getQueryFromId(queries, queryId)
  // const [errorMessage, setErrorMessage] = useState(null)
  if (!query) return null

  const {name} = query



  return (
    <div>
      <h3>Thanks for getting in touch, {name}</h3>
      <p>Your query confirmation number is #{query._id}</p>
    </div>
  )
}


export default QueryConfirm