export default function (state, action) {
  switch(action.type) {
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