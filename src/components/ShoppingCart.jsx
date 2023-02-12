import PropTypes from 'prop-types';
import React, { Component } from 'react';

// página do carrinho de compras
class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div className="shopping-cart">
        {!Object.values(cart) ? (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        ) : (
          Object.values(cart).map((item) => (
            <div key={ item.product.title }>
              <p data-testid="shopping-cart-product-name">{item.product.title}</p>
              <p data-testid="shopping-cart-product-quantity">{item.product.quantity}</p>
            </div>
          ))
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
