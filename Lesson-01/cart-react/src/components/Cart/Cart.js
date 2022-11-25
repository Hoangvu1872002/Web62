import React, {useContext} from 'react'
import CartContext from '../../context/cart/CartContext'
import "./Cart.css"
const Cart = (props) => {
  const { state, dispatch} = useContext(CartContext)
  const {cart} =state

  const cartBody = cart && cart.map((cartItem, index)=>{
    const {id, name ,price, img, quantity }=cartItem
    const formatePrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(quantity * Number(price))
    return (
      <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>
        <img src={img} style ={{width:"40px",height:"40px"}}/>
      </td>
      <td className='d-flex'>
        
        <button className='btn btn-primary' on onClick={()=> dispatch({
          type: 'MINUS_QUANTITY',
          payload: id
        })}>-</button>
        <span className=''>{quantity}</span>
        <button className='btn btn-primary' on onClick={()=> dispatch({
          type: 'PLUS_QUANTITY',
          payload: id
        })}>+</button>
      </td>
      <td>{formatePrice}</td>
      <td>
        <button className='btn btn-danger rounded-circle' onClick={()=>dispatch({
          type:'DELETE_CART_ITEM',
          payload: id
        })}>Delete</button>
      </td>
    </tr>
    )
  })
  return (
    <div className='container'>
      <h4 className='mb-4'>cart</h4>
      <div className='cart-container'>
 <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Image</th>
      <th scope="col">Quatity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {cartBody}
  </tbody>
</table>

      </div>
      
    </div>
  )
}

export default Cart
