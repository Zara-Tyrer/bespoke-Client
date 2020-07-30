import React from 'react'
import Product from './Product'
import {useGlobalState} from '../config/store'
import {DashboardButton, CustomiseOrder, ProductsContainer, ProductsGrid, BackDashContainer} from './StyledComponents'



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

    // shows customise order when not logged in and add product and back to order when logged in
    return (
      <ProductsContainer>
        {showDashboardButton && (
          <DashboardButton data-cy="newProductButton" to="/products/new">Add New Product</DashboardButton>
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
            <BackDashContainer>
              <DashboardButton to="/dashboard">Back to Dashboard</DashboardButton>
            </BackDashContainer>
          )}
        </div>
      </ProductsContainer>
    )
}

export default Products 