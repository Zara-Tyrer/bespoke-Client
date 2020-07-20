import React, {useReducer, useEffect, Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import Product from './components/Product'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import DashboardNav from './components/DashboardNav'
import Lookbook from './components/Lookbook'
import { StateContext} from './config/store'
import stateReducer from './config/stateReducer'
import { getAllProducts, getProductFromId } from './services/productServices'
import { userAuthenticated, setLoggedInUser, getLoggedInUser } from "./services/authServices"
import {Page} from './components/StyledComponents'


const App = () => {
  const initialState = {
    products: [],
    loggedInUser: null
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
		userAuthenticated().then(() => {			 
			dispatch({
				type: "setLoggedInUser",
				data: getLoggedInUser()
			})
		}).catch((error) => {
			console.log("got an error trying to check authenticated user:", error)
			setLoggedInUser(null) 
			dispatch({
				type: "setLoggedInUser",
				data: null
			})
		})
    // return a function that specifies any actions on component unmount
    return () => {}
  },[])
  
  
  
  
  return (
    <Page >
      <StateContext.Provider value={{store, dispatch}} >
        <BrowserRouter>
        <NavBar />
            <Fragment>
              <Route exact path='/products' component={Products} />
              <Route exact path="/products/new" component={NewProduct} />
              <Route exact path="/products/edit/:id" component={EditProduct} />
              <Route exact path="/admin/login" component={SignIn} />
              <Route exact path="/lookbook" component={Lookbook} />
              <Route exact path="/dashboard" component={DashboardNav} />
              <Route exact path="/products/:id" render={(props) => <Product {...props} product={getProductFromId(products,props.match.params.id)} /> } />
            </Fragment>
        <Footer />
        </BrowserRouter>
      </StateContext.Provider>
    </Page>
  )
}

export default App
