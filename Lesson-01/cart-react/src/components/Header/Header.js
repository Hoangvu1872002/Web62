import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/cart/CartContext'
 
const Hearder = () => {
  const cartCtx = useContext(CartContext)
  const cart = cartCtx.state.cart
  const numberCart= cart.length
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">SmathShop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="link">Link</Link>
        </li>
          
      </ul>
      <div className="cart">
        <Link to="/cart">
          <span>Cart({numberCart})</span>
        </Link>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Hearder
