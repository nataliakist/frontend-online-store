import React from 'react';
import { getCategories } from '../services/api';

class Search extends React.Component {
  state = {
    loading: false,
    categories: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const categories = await getCategories();
    this.setState({ categories, loading: false }); // puxando as categorias da api e armazenando no estado
  }

  render() { // criando os elementos na pagina de Search que esta contida na pasta components
    const { categories, loading } = this.state;
    console.log(categories);
    return ( // search esta sendo exportada para o App
      <div>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        { loading && <p>Loading...</p>}
        <div>
          {
            categories.map((category, index) => (
              <section key={ index }>
                <label htmlFor={ category.id } data-testid="category">
                  <input type="radio" id={ category.id } />
                  { category.name }
                </label>
              </section>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Search;
