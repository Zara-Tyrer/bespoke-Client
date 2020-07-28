import React from 'react'
import Product from './Product'
import {useGlobalState} from '../config/store'
import {DashboardButton, CustomiseOrder, ProductsContainer, ProductsGrid} from './StyledComponents'



const Products = () => {
    const {store} = useGlobalState()
    const {products, loggedInUser} = store
    const showDashboardButton = loggedInUser

    const customiseOrder = {
      paddingTop: "3em",
      paddingBottom: ".git5em"
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
        
        <div>
          <ProductsGrid>
            {products.map((product) => <Product key={product._id} product={product} />)}
          </ProductsGrid>
          {showDashboardButton && (
            <div>
              <DashboardButton to="/dashboard">Back to Dashboard</DashboardButton>
            </div>
          )}
        </div>
      </ProductsContainer>
    )
}

export default Products 