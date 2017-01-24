//Class components
// import React, { Component } from 'react';
// const DeepstreamMixin = require('deepstream.io-tools-react')
//
// export default class SyncedInput extends Component {
//   mixins: [DeepstreamMixin];
//   constructor(props){
//     super(props);
//     console.log(props);
//     this.state = { value: '', dsRecord: props.dsRecord};
//     console.log(this.state);
//     this.setValue = this.setValue.bind(this);
//   };
//
//   setValue(e) {
//     this.setState({value: e.target.value})
//   };
//
//   render() {
//     console.log(this.state.value);
//     return (
//       <input value={this.state.value} onChange={this.setValue} />
//     )
//   };
// };
//

//Working deepstream code
import React from 'react';
const DeepstreamMixin = require('deepstream.io-tools-react')

const SyncedInput = React.createClass({
  mixins: [DeepstreamMixin],
  setValue: function(e) {
    this.setState({value: e.target.value})
  },
  render: function() {
    return (
      <input value={this.state.value} onChange={this.setValue} />
    )
  }
})

export default SyncedInput;
