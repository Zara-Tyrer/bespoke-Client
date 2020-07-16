import React, {useReducer, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Products from './components/Products'
import { StateContext} from './config/store'

const App = () => {
  
  // initial state for state reducer
  const initialState = {
    products: [],
    // loggedInUser: null
  }

  // Create state reducer store and dispatcher
  const [store, dispatch] = useReducer(stateReducer,initialState)
  const {blogPosts, loggedInUser} = store

  useEffect(() => {
    dispatch({
      type: "setProducts",
      data: products
    })
  },[])
  
  
  return (
    <div >
      <StateContext.Provider value={{store, dispatch}} >
        <BrowserRouter>
            <h1>The basic empty template</h1>
            <Route exact path='/products' component={Products} />
        
        </BrowserRouter>
      </StateContext.Provider>
    </div>
  )
}

export default App
