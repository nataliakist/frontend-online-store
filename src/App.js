import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route path="/cart" component={ ShoppingCart } />
      </Switch>
    </div>

  );
}

export default App;
