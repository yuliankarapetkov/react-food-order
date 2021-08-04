import Cart from './components/Cart/Cart';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

import './App.css';

function App() {
  return (
    <Fragment>
      <Cart />

      <Header />

      <Meals />
    </Fragment>
  );
}

export default App;
