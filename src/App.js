import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  state = {
    cart: {},
  };

  addCart = (product) => {
    const { cart } = state;
    const { id, title, price, thumbnail } = product;
    if (cart[id]) {
      cart[id].quantity += 1;
    } else {
      cart[id] = {
        id,
        title,
        price,
        thumbnail,
        quantity: 1,
      };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    setState({
      cart,
    });
  };

  // removeCart = (id) => {
  //   const { cart } = state;
  //   delete cart[id];
  //   setState({ cart });
  // };

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => <Search { ...props } onClick={ this.addCart } /> }
          />
          <Route
            path="/cart"
            render={ (props) => <ShoppingCart { ...props } cart={ cart } /> }
          />
          <Route exact path="/products/:id" component={ Products } />
        </Switch>
      </div>

    );
  }
}

export default App;
