import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'

const ProductList = ({products, setCart}) => {
                                               
  return (
    <div className="box">
    <div className="boxItem">
     {products.map((item) =>(
      <Product value={item} key={item.id} setCart={setCart}/>
     ))}
    </div>
    </div>
  )
}

export default ProductList