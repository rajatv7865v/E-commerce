import "./App.css";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import { Routes, Route } from "react-router-dom";
import Greet from "./Pages/Greet";
import { data } from "./data";
import productContext from "./Context/appContext";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState(data);
  const [products,setProducts]=useState();
  const [filter,setFilter]=useState([]);
  const [cartItem,setCartItem]=useState([]);
  const [price,setPrice]=useState(0);
  const [count,setCount]=useState(0);
  return (
    <productContext.Provider value={{
      product:product,
      modalItem:products,
      filter:filter,
      setProduct:setProduct,
      setModalItem:setProducts,
      setFilter:setFilter,
      cartItem:cartItem,
      setCartItem:setCartItem,
      price:price,
      setPrice:setPrice,
      count:count,
      setCount:setCount,
    }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/greet" element={<Greet />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </productContext.Provider>
  );
}

export default App;
