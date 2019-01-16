import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parser from 'html-react-parser';

class Favourite extends Component {

  constructor(props) {
    super(props);
  }

  removeFavourite = () => {
    this.props.onRemoveFavourite(this.props.title);
  };

  render() {
    return (
      <div>
        <div className="resultTitle" >
          <FontAwesomeIcon className="star greenStar" icon="star" onClick={this.removeFavourite.bind(this)} />
          {this.props.title}
        </div>
        <div className="resultBody" dangerouslySetInnerHTML={{__html: this.props.body}} />
      </div>
    );
  }
}

export default Favourite;
