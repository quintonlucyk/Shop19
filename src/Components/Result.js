import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Parser from 'html-react-parser';

class Result extends Component {

  constructor(props) {
    super(props);
    let prevFav = false;
    if (this.props.favObjs && this.props.favObjs.indexOf(this.props.resultObj) != -1){
      prevFav = true;
    }
    this.state = {favourite: prevFav};
  }

  addFavourite = () => {
    if (!this.state.favourite || (this.props.favObjs && this.props.favObjs.indexOf(this.props.resultObj) == -1)){
      this.setState({favourite: true});
      this.props.onAddFavourite(this.props.resultObj);
    }
  };

  classNameStar = () => {
    if (this.props.favObjs && this.props.favObjs.indexOf(this.props.resultObj) == -1)
      return "star greyStar";
    else if (this.state.favourite)
      return "star greenStar";
    else
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
