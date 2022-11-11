import React from 'react';
import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/Error404/Error404'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
