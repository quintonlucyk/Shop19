import React, { Component } from 'react';
import Header from './Components/Header.js';
import Search from './Components/Search.js';
import Result from './Components/Result.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: []};
  }

  componentDidUpdate() {

  }

  handleSearchResults = (results) => {
    this.setState({searchResults: results});
  };

  render() {
    let Results = this.state.searchResults.map(result => {
      var Parser = require('html-react-parser');
      let body = Parser(result.body);
      return (
        <Result body={body} title={result.title}/>
      );
    });
    return (
      <div>
        <Header />
        <Search onResultsReturned={this.handleSearchResults} />
        {Results}
      </div>
    );
  }
}

export default App;
