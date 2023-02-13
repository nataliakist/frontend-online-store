import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// pagina cos os detalhes do produto
class Products extends Component {
  constructor() {
    super();
    this.state = ({
      productDetail: [], // estado inicial do prduto é vazio
    });
  }

  componentDidMount() {
    this.gettingProduct();
  }

  gettingProduct = async () => { // funcao que captura o produto selecionado
    const { match: { params } } = this.props; // acessando os params dentro da props da api
    const productDetail = await fetch(`https://api.mercadolibre.com/items/${params.id}`); // requisicao para pegar o produto via id
    const selectedProduct = await productDetail.json(); // deixando os dados limpos
    this.setState({
      productDetail: selectedProduct, // setando os detalhes do onj do produto na key do state
    });
  };

  render() {
    const { addCart } = this.props; // acessando a funcao addCart
    const { productDetail } = this.state; // capturando a key do state
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          Carrinho de Compras
        </Link>
        <h2 data-testid="product-detail-name">{ productDetail.title }</h2>
        <img
          data-testid="product-detail-image"
          src={ productDetail.thumbnail } // pegando img do produto
          alt={ productDetail.title } // texto alternativo em caso de falha de upload da img e abaixo há o direciomento para o carrinho atraves de link
        />
        <h4 data-testid="product-detail-price">{ productDetail.price }</h4>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addCart({ // passando productDetail para a funcao addCart
            title: productDetail.title,
            price: productDetail.price,
            thumbnail: productDetail.thumbnail,
            id: productDetail.id,
          }) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}
// proptypes do id passado como parametro
Products.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Products.propTypes = {
  addCart: PropTypes.func.isRequired,
};

export default Products;
