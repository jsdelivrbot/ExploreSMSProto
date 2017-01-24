import React, { Component } from 'react';

export default class messagingText extends Component {
  constructor(props) {
      super(props);
  }


  render() {
    switch(this.props.requestStatus){
      case null:
        return( <div className="messaging_text">Press to speak with an ambassador.</div>);
      case 'pending':
          return( <div className="messaging_text">An ambassador will be with you shortly.</div>);
      case 'complete':
        return( <div></div>);
      default:
        return (<div></div>);
    }
  }
}
