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
    default:
      return state
  }
}