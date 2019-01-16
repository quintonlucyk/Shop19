import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Data } from '../Config/data.js';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {searchValue: ""};
  }

  triggerSearch = () => {
    let resultsReturned = [];
    if (this.searchValue !== ""){
      for (let wasteItem of Data) {
        if (wasteItem["keywords"].indexOf(this.state.searchValue) !== -1) {
          resultsReturned.push(wasteItem);
        }
      }
      this.props.onResultsReturned(resultsReturned);
    }
  };

  inputKeyUp = (event) => {
    if (event.keyCode === 13){
      this.triggerSearch();
    } else {
      this.setState({searchValue: event.target.value});
    }
    if (event.keyCode === 8 && event.target.value == ""){
      this.props.onResultsReturned([]);
    }
  };

  render() {
    return (
      <div className="search">
        <input onKeyUp={this.inputKeyUp} />
        <FontAwesomeIcon icon="search" onClick={this.triggerSearch} />
      </div>
    );
  }
}

export default Search;
