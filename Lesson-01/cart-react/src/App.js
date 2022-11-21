import { useState, useEffect} from "react";
import './App.css'; 
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import CartState from "./context/cart/CartState";

function App() {

  return (
    <Router>
      <CartState>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element ={<NotFoundPage/>}/>
     </Routes>
      </CartState>
     

    
    </Router>
    
  );
}

export default App;

