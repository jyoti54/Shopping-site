import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import NavBar from './Components/NavBar';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import Register from './Components/Register';
import Categories from './Components/Categories';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </>
  );
}

export default App;
