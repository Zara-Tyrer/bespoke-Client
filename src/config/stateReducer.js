//setting global state

export default function (state, action) {
  switch(action.type) {
    case "setLoggedInUser": {
      return {
          ...state,
          loggedInUser: action.data
      }
    }
    case "setProducts": {
      return {
        ...state,
        products: action.data
      }
    }
    case "setOrders": {
      return {
        ...state,
        orders: action.data
      }
    }
    case "setQueries": {
      return {
        ...state,
        queries: action.data
      }
    }
    case "setEmails": {
      return {
        ...state,
        emails: action.data
      }
    }
    case "setError": {
      return {
          ...state,
          error: action.data
      }
  }
    default:
      return state
  }
}