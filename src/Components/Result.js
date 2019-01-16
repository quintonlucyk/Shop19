import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parser from 'html-react-parser';

class Result extends Component {

  constructor(props) {
    super(props);
    //this.state = {: ""};
  }

  render() {


    return (
      <div>
        <div className="resultTitle" >{this.props.title}</div>
        <div className="resultBody" dangerouslySetInnerHTML={{__html: this.props.body}} />
      </div>
    );
  }
}

export default Result;
