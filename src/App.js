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
    const { cart } = this.state;
    const { id } = product;

    const newCart = cart[id] ? { // se o item já estiver no carrinho
      ...cart, // copia o carrinho
      [id]: { // sobrescreve o valor do item
        ...cart[id], // espalha o conteúdo do item
        quantity: cart[id].quantity + 1, // incrementa a quantidade
      },
    } : { // se o item não estiver no carrinho
      ...cart, // copia o carrinho
      [id]: { // sobrescreve o valor do item
        product, // adiciona o produto
        quantity: 1, // define a quantidade
      },
    };

    this.setState({
      cart: newCart, // atualiza o estado
    });

    localStorage.setItem('cart', JSON.stringify(newCart)); // atualiza o localStorage
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
            render={ (props) => <Search { ...props } addCart={ this.addCart } /> }
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
