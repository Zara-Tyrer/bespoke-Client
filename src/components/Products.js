import React from 'react'
import Product from './Product'
import {useGlobalState} from '../config/store'

const Products = () => {
    const {store} = useGlobalState()
    const {products} = store
    return (
      <div>
        {products.map((product) => <Product key={product._id} product={product} />)}
      </div>
    )
}

export default Products