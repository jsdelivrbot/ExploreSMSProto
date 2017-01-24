import React, { Component } from 'react';

export default class ambassadorInfo extends Component {
  constructor(props) {
      super(props);
      console.log(props);
  }


  render() {
    const imagePath = '../style/images/'
    if (!this.props.ambassadorName || !this.props.ambassadorImage){
      return( <div></div>);
    }
    return (
      <div className="ambassador_info">
        <img className="ambassador_image" src={`${imagePath}${this.props.ambassadorImage}`} onClick={this.props.onRemoval}></img>
        <div className="ambassador_name" >{this.props.ambassadorName} will be with you shortly!</div>
      </div>
    );
  }
}
