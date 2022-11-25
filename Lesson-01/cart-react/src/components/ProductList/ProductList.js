import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'

const ProductList = ({ conViewProductDetail ,products}) => {
                                               
  return (
    <div className="box">
    <div className="boxItem">
     {products.map((item) =>(
      <Product
      conViewProductDetail={conViewProductDetail}
      value={item}
      key={item.id} />
     ))}
    </div>
    </div>
  )
}

export default ProductList