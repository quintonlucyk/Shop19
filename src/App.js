import React, { Component } from 'react';
import Header from './Components/Header.js';
import Search from './Components/Search.js';
import Result from './Components/Result.js';
import Favourite from './Components/Favourite.js';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);
library.add(faStar);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      favourites: []
    };
  }

  componentDidUpdate() {

  }

  handleSearchResults = (results) => {
    this.setState({searchResults: results});
  };

  addFavourite = (result) => {
    let newFavourites = this.state.favourites;
    newFavourites.push(result);
    this.setState({favourites: newFavourites});
  };

  removeFavourite = (result) => {
    let newFavourites = this.state.favourites;
    newFavourites.filter(favourite => favourite.value != result);
    this.setState({favourites: newFavourites});
  };

  render() {
    let searchResults = this.state.searchResults.map(result => {
      let Parser = require('html-react-parser');
      let body = Parser(result.body);
      return (
        <Result favObjs={this.state.favourites} resultObj={result} body={body} title={result.title} onAddFavourite={this.addFavourite}/>
      );
    });
    let favouriteResults = [];
    if (this.state.favourites.length > 1){
      favouriteResults = this.state.favourites.map(favourite => {
        let Parser = require('html-react-parser');
        let favBody = Parser(favourite.body);
        return (
          <Favourite favObj={favourite} body={favBody} title={favourite.title} onRemoveFavourite={this.removeFavourite}/>
        );
      });
    }
    return (
      <div>
        <Header />
        <Search onResultsReturned={this.handleSearchResults} />
        {searchResults}
        {this.state.favourites.length > 1 ? (
          <div className="favouritesTitle">Favourites</div>
        ) : null}
        {favouriteResults}
      </div>
    );
  }
}

export default App;
