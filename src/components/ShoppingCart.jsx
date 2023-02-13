import PropTypes from 'prop-types';
import React, { Component } from 'react';

// página do carrinho de compras
class ShoppingCart extends Component {
  render() {
    const { cart } = this.props; // cart é um objeto com os produtos do carrinho
    return (
      <div className="shopping-cart">
        { Object.keys(cart).length > 0 ? ( // se o carrinho não estiver vazio
          Object.values(cart).map((item) => ( // itera sobre os produtos do carrinho
            <div key={ item.product.title }>
              <p data-testid="shopping-cart-product-name">{ item.product.title }</p>
              <img src={ item.product.thumbnail } alt={ item.product.title } />
              <p>{ item.product.price }</p>
              <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
            </div>
          ))
        ) : ( // se o carrinho estiver vazio
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p> // mensagem de carrinho vazio
        )}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default ShoppingCart;
