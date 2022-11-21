import React, { useState, useEffect}  from 'react'
import ProductDetail from '../ProductDetail/ProductDetail';
import ProductList from '../ProductList/ProductList';
import Cart from "../Cart/Cart"

const initialProduct = [
    {
      id: 1,
      name: "Samsung Galaxy A10",
      price: "40906000",
      img: "./images/samsung-galaxy.jpg",
      info: {
        screen: "AMOLED Full HD 9.0",
        os: "Android 9.0",
        frontCamera: "20MP",
        backCamera: "Chính 48MB, phụ 30MP",
      },
      ram: "4 GB",
      rom: "64 GB",
    },
    {
      id: 2,
      name: "IPhone12",
      price: "200306000",
      img: "./images/iphone-12.jpg",
      info: {
        screen: "Full HD 12.0",
        os: "IOS 14",
        frontCamera: "20MP",
        backCamera: "Chính 100MB, phụ 30MP",
      },
      ram: "16 GB",
      rom: "32 GB",
    },
    {
      id: 3,
      name: "Xiaomi Note 10",
      price: "10005000",
      img: "./images/xiaomi-redmi-note-10-5g.jpg",
      info: {
        screen: "OLED 10.0",
        os: "Android 8.0",
        frontCamera: "69MP",
        backCamera: "Chính 96MB, phụ 30MP",
      },
      ram: "10 GB",
      rom: "64 GB",
    },
  ]
  
  const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    useEffect(()=>{
      setProducts(initialProduct);
    },[])
    return (
      <div className="Home">
       <ProductList products={products} setCart ={setCart}/>
       <ProductDetail/>
      </div>
    );
  }
  
  export default Home;
  