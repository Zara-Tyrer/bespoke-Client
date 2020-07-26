import React from 'react'
import Product from './Product'
import {useGlobalState} from '../config/store'
import {DashboardButton, CustomiseOrder, ProductsContainer, ProductsDiv, ProductsGrid} from './StyledComponents'
import { findByLabelText } from '@testing-library/react'


const Products = () => {
    const {store} = useGlobalState()
    const {products, loggedInUser} = store
    const showDashboardButton = loggedInUser

    const customiseOrder = {
      padding: "3em",
    }
    const customiseCard = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }

    return (
      <ProductsContainer>
        {showDashboardButton && (
          <div>
            <DashboardButton to="/products/new">Add New Product</DashboardButton>
          </div>
        )}
        {!loggedInUser && (
          <div style={customiseCard}> 
            <div style={customiseOrder}>Customise your own set of press ons</div>
            <CustomiseOrder to="/orders/new">CUSTOMISE</CustomiseOrder>
          </div>
        )}
        <ProductsGrid>
        <div>
          <ProductsDiv>
            {products.map((product) => <Product key={product._id} product={product} />)}
          </ProductsDiv>
          {showDashboardButton && (
            <div>
              <DashboardButton to="/dashboard">Back to Dashboard</DashboardButton>
            </div>
          )}
        </div>
        </ProductsGrid>
      </ProductsContainer>
    )
}

export default Products 