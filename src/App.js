import './App.css';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
 import {Routes,Route} from 'react-router-dom'
import Greet from './Pages/Greet';
import ProductsData from './components/ProductsData';
import ProductData from './components/ProductData';
function App() {
  return (
    <Routes >
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/greet' element={<Greet/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/productList' element={<ProductList/>}/>







    </Routes>
  );
}

export default App;
