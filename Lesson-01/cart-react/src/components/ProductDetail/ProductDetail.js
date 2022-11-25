import React from 'react'

const ProductDetail = ({selectedProduct}) => {
  return (
    <div>
      <img src = {selectedProduct?.img}/>
    </div>
  )
}

export default ProductDetail
