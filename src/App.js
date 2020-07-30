import React, {useReducer, useEffect, Fragment} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import Product from './components/Product'
import Orders from './components/Orders'
import NewOrder from './components/NewOrder'
import EditOrder from './components/EditOrder'
import OrderConfirm from './components/OrderConfirm'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import Lookbook from './components/Lookbook'
import Query from './components/Query'
import Queries from './components/Queries'
import NewQuery from './components/NewQuery'
import QueryConfirm from './components/QueryConfirm'
import { StateContext} from './config/store'
import stateReducer from './config/stateReducer'
import { getAllProducts, getProductFromId } from './services/productServices'
import { getAllOrders } from './services/orderServices'
import { getAllQueries, getQueryFromId} from './services/queryServices'
import { userAuthenticated, setLoggedInUser, getLoggedInUser } from "./services/authServices"
import {Page} from './components/StyledComponents'
import About from './components/About'
import Home from './components/Home'
import NewFileUpload from './components/NewFileUpload'
import NotFound from './components/NotFound'


const App = () => {
  const initialState = {
    products: [],
    orders: [],
    queries: [],
    loggedInUser: null
  }
  
  const [store, dispatch] = useReducer(stateReducer,initialState)
  const {products, queries} = store

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
      console.log("An error occurred fetching products from the server: ", error)
    })
  }

  function fetchOrders() {
    getAllOrders().then((orderData) => {
      dispatch({
        type: "setOrders",
        data: orderData
      })
    }).catch((error) => {
      dispatch({
        type: "setError",
        data: true
      })
      console.log("An error occurred fetching orders from the server: ", error)
    })
  }

  function fetchQueries() {
    getAllQueries().then((queryData) => {
      dispatch({
        type: "setQueries",
        data: queryData
      })
    }).catch((error) => {
      dispatch({
        type: "setError",
        data: true
      })
      console.log("An error occurred fetching queries from the server: ", error)
    })
  }

  useEffect(() => {
    fetchProducts()
		userAuthenticated().then(() => {			 
			dispatch({
				type: "setLoggedInUser",
				data: getLoggedInUser()
      })
      fetchOrders()
      fetchQueries()
		}).catch((error) => {
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
            <Switch>
              <Route exact path='/products' component={Products} />
              <Route exact path='/orders' component={Orders} />
              <Route exact path="/products/new" component={NewProduct} />
              <Route exact path="/orders/new" component={NewOrder} />
              <Route exact path="/orders/edit/:id" component={EditOrder} />
              <Route exact path="/order/confirm/:id" component={OrderConfirm} />
              <Route exact path="/products/edit/:id" component={EditProduct} />
              <Route exact path="/admin/login" component={SignIn} />
              <Route exact path="/lookbook" component={Lookbook} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/products/:id" render={(props) => <Product {...props} product={getProductFromId(products,props.match.params.id)} /> } />
              <Route exact path="/query/:id" render={(props) => <Query {...props} query={getQueryFromId(queries,props.match.params.id)} /> } />
              <Route exact path="/query" component={Queries} />
              <Route exact path="/contact" component={NewQuery} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/confirm/:id" component={QueryConfirm} />
              <Route exact path='/' component={Home} />
              <Route exact path="/uploads" component={NewFileUpload} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        <Footer />
        </BrowserRouter>
      </StateContext.Provider>
    </Page>
  )
}

export default App
