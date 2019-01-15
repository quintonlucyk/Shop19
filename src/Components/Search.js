import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {searchValue: ""};
  }
  /*
  handleChange = event => {
    this.setState({ value: event.target.value });
    let data = {};
    data[this.props.id] = event.target.value;
    console.log(data);
    this.props.saveValues(data);
    this.props.dispatch({
      type: "ADD_SINGLENUM",
      id: this.props.id,
      payload: event.target.value
    });
  };
  */

  triggerSearch = () => {
    console.log('search');
  };

  inputKeyUp = (event) => {
    if (event.keyCode === 13){
      this.triggerSearch();
    } else {
      this.setState({searchValue: event.target.value});
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
