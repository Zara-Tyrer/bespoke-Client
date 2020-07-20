import React from 'react'
import Product from './Product'
import {useGlobalState} from '../config/store'
import {DashboardButton} from './StyledComponents'


const Products = () => {
    const {store} = useGlobalState()
    const {products, loggedInUser} = store
    const showDashboardButton = loggedInUser

    return (
      <div>
        {showDashboardButton && (
          <div>
            <DashboardButton to="/products/new">Add New Product</DashboardButton>
          </div>
        )}
        {products.map((product) => <Product key={product._id} product={product} />)}
        {showDashboardButton && (
          <div>
            <DashboardButton to="/dashboard">Back to Dashboard</DashboardButton>
          </div>
        )}
      </div>
    )
}

export default Products 