import React, { Component } from 'react';
import Header from './Components/Header.js';
import Search from './Components/Search.js';
import Results from './Components/Results.js';
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
    return (
      <div>
        <Header />
        <Search onResultsReturned={this.handleSearchResults} />
        <Results resultArray={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
