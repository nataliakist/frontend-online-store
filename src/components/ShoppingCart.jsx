import PropTypes from 'prop-types';
import React, { Component } from 'react';

// página do carrinho de compras
class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    console.log(Object.values(cart));
    return (
      <div className="shopping-cart">
        { Object.keys(cart).length > 0 ? (
          Object.values(cart).map((item) => (
            <div key={ item.product.title }>
              <p data-testid="shopping-cart-product-name">{ item.product.title }</p>
              <img src={ item.product.thumbnail } alt={ item.product.title } />
              <p>{ item.product.price }</p>
              <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
            </div>
          ))
        ) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
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
