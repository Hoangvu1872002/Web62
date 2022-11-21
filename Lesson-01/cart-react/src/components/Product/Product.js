import React, { useContext, useState } from 'react'
import CartContext from '../../context/cart/CartContext'
import './Product.css'

const Product = ({value, setCart}) => {
  const CartCtx = useContext(CartContext);
  const { dispatch } = CartCtx; 
    
    const handleAddCart =(product) =>{
console.log(product)
      const action = {
        type: "ADD_TO_CART",
        payload: product,
      };

      dispatch(action) 

        // setCart((prevState) =>{
        //   const exsit = prevState.some((item)=>(item.id===product.id))
        //   let newState;
        //   if(exsit){
        //     newState= prevState.map((item)=>{
        //       if(item.id===product.id){
        //         console.log(item)
        //         return{...item, quantity: item.quantity + 1 }               
        //       }else{
        //          console.log(item.quantity)
        //         return item;
        //       }
        //     })
        //   }else{
        //     newState= [...prevState, {...product, quantity: 1}];
           
        //      console.log([...prevState, {...product, quantity: 1}])
        //   } 
        //   return newState     
        // })
        }
  return (

    <div className="cardBox" style={{width: '19rem'}}>
      <div className="card">
  <img src={value.img}  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{value.name}</h5>
    <p className="card-price">Gia: {value.price}</p>
    <div className='boxBtn d-flex ' style={{gap:"8px"}}>
    <button type="button" className="btn btn-primary " onClick={()=>console.log('show', value)}>View</button>
    <button type="button" className="btn btn-danger" onClick={()=>handleAddCart(value)}>Add to cart</button>
     </div>
  </div>
      </div>
</div>
  )
}

export default Product
