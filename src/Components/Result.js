import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parser from 'html-react-parser';

class Result extends Component {

  constructor(props) {
    super(props);
    this.state = {favourite: false};
  }

  addFavourite = () => {
    if (this.state.favourite === false){
      this.setState({favourite: !this.state.favourite});
      console.log(this.props);
      console.log(this.props.result);
      this.props.onAddFavourite(this.props.resultObj);
    }
  };

  classNameStar = () => {
    if (this.state.favourite)
      return "star greenStar";
    return "star greyStar";
  };

  render() {
    return (
      <div>
        <div className="resultTitle" >
          <FontAwesomeIcon className={this.classNameStar()} icon="star" onClick={this.addFavourite.bind(this)} />
          {this.props.title}
        </div>
        <div className="resultBody" dangerouslySetInnerHTML={{__html: this.props.body}} />
      </div>
    );
  }
}

export default Result;
