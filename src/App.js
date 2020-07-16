import React, {useReducer, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Products from './components/Products'
import { StateContext} from './config/store'
import stateReducer from './config/stateReducer'
import { getAllProducts } from './services/productServices'



const App = () => {
  const initialState = {
    products: [],
    // loggedInUser: null
  }
  
  const [store, dispatch] = useReducer(stateReducer,initialState)
  const {products} = store

  function fetchProducts() {
    getAllProducts().then((productData) => {
      dispatch({
        type: "setProducts",
        data: productData
      })
    }).catch((error) => {
      dispatch({
        type: "setError",
        data: true
      })
      console.log("An error occurred fetching blog posts from the server: ", error)
    })
  }

  useEffect(() => {
    fetchProducts()
  },[])
  // initial state for state reducer
  
  
  
  
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
