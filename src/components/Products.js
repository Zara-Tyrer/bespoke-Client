import React from 'react'
import Product from './Product'
import {useGlobalState} from '../config/store'
import {BackToDashboard} from './StyledComponents'


const Products = () => {
    const {store} = useGlobalState()
    const {products, loggedInUser} = store
    const showDashboardButton = loggedInUser

    return (
      <div>
        {products.map((product) => <Product key={product._id} product={product} />)}
        {showDashboardButton && (
          <div>
            <BackToDashboard to="/dashboard">Back to Dashboard</BackToDashboard>
          </div>
        )}
      </div>
    )
}

export default Products 