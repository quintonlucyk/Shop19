import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parser from 'html-react-parser';

class Results extends Component {

  constructor(props) {
    super(props);
    //this.state = {: ""};
  }

  render() {
    let IndivResults = this.props.resultArray.map(result => {
      var Parser = require('html-react-parser');
      let text = Parser(result.body);
      return (
        <div dangerouslySetInnerHTML={{__html: text}} />
      );
    });

    return (
      <div>
        {IndivResults}
      </div>
    );
  }
}

export default Results;
