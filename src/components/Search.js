import React from 'react';

class Search extends React.Component {
  render() { // criando os elementos na pagina de Search que esta contida na pasta components
    return ( // search esta sendo exportada para o App
      <div>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default Search;
