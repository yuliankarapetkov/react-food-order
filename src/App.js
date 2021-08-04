import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

import { useState } from 'react';

import './App.css';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCart = () => setCartVisible(true);
  const hideCart = () => setCartVisible(false);

  return (
    <CartProvider>
      {cartVisible && <Cart onClose={hideCart} />}

      <Header onCartClick={showCart} />

      <Meals />
    </CartProvider>
  );
}

export default App;
