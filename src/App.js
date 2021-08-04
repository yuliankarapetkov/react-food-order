import Cart from './components/Cart/Cart';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

import { useState } from 'react';

import './App.css';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCart = () => setCartVisible(true);
  const hideCart = () => setCartVisible(false);

  return (
    <Fragment>
      {cartVisible && <Cart onClose={hideCart} />}

      <Header onCartClick={showCart} />

      <Meals />
    </Fragment>
  );
}

export default App;
