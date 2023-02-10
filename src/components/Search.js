import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CartBtn from './CartBtn';

class Search extends React.Component {
  state = {
    loading: false,
    categories: [],
    productsList: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const categories = await getCategories();
    this.setState({ categories, loading: false }); // puxando as categorias da api e armazenando no estado
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      searchInput: value,
    });
  };

  fetchProducts = async () => {
    const { searchInput } = this.state;
    this.setState({ loading: true });
    const productsList = await getProductsFromCategoryAndQuery('', searchInput);
    this.setState({ productsList: productsList.results, loading: false });
  };

  render() { // criando os elementos na pagina de Search que esta contida na pasta components
    const { categories, loading, searchInput, productsList } = this.state;
    console.log(productsList);
    return ( // search esta sendo exportada para o App
      <div>
        <label htmlFor="search">
          <input
            type="text"
            name="searchInput"
            id="search"
            value={ searchInput }
            placeholder="Pesquise um produto"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          data-testid="query-button"
          onClick={ this.fetchProducts }
        >
          Pesquisar
        </button>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <CartBtn />
        { loading && <p>Loading...</p>}
        <div>
          <h4>Categorias:</h4>
          {
            categories.map((category) => (
              <section key={ category.id }>
                <label htmlFor={ category.id } data-testid="category">
                  <input
                    type="radio"
                    id={ category.id }
                  />
                  { category.name }
                </label>
              </section>
            ))
          }
        </div>
        <div>
          { productsList.length === 0 ? 'Nenhum produto foi encontrado' : (
            productsList && (
              productsList.map((product) => (
                <section
                  key={ product.id }
                  data-testid="product"
                >
                  <img src={ product.thumbnail } alt={ product.title } />
                  <h4>{ product.title }</h4>
                  <p>{ `R$${product.price}` }</p>
                </section>
              ))
            )
          )}
        </div>
      </div>
    );
  }
}

export default Search;
