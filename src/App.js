import './App.css';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
 
function App() {
  return (
    <div >
    <Home/>
    <Login/>
    <Register/>
    <Cart/>
    <Product/>
    <ProductList/>
    </div>
  );
}

export default App;
