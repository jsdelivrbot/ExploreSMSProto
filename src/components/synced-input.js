import React from 'react';
import AmbassadorInfo from './ambassador-info';
import MessagingText from './messaging-text';
const DeepstreamMixin = require('deepstream.io-tools-react');


const SyncedInput = React.createClass({
  getInitialState() {
    return {
      requestStatus: null
    };
  },
  mixins: [DeepstreamMixin],
  setValue: function(e) {
    this.setState({value: e.target.value})
  },
  sendRequest() {
    console.log("Request sent to ambassador");
    console.log("State: " + this.state.requestStatus);
    this.setState({requestStatus: 'pending'});
  },
  removeRequest() {
    console.log("Removing request...");
    if (this.state.requestStatus === 'complete'){
      console.log("Removing request from server");
      this.setState({requestStatus: 'remove'});
    }
  },
  render: function() {
    return (
      <div>
        {/* <input value={this.state.value} onChange={this.setValue} /> */}
        <img className="phone_logo" src='../style/images/phone_logo.png' onClick={this.sendRequest}/>
        <AmbassadorInfo ambassadorName={this.state.ambassadorName}
          ambassadorImage={this.state.ambassadorImage}
          onRemoval={this.removeRequest}/>
        <MessagingText requestStatus={this.state.requestStatus}></MessagingText>
        {/* <img src={this.state.ambassadorImage}></img> */}
      </div>
    )
  }
})

export default SyncedInput;
