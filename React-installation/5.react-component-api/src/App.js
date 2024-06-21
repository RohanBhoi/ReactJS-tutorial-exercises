import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

/*
// 1. Example of setState() method
// This method is used to update the state of the component.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome to JavaTpoint"
    };

    this.updateSetState = this.updateSetState.bind(this);
  }

  updateSetState() {
    this.setState({
      msg: "Its a best ReactJS tutorial"
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.msg} </h1>
        <button onClick={this.updateSetState}> Set State </button>
      </div>
    );
  }
}
*/

/*
// 2. Example of forceUpdate()
// This method allows us to update the component manually.
class App extends React.Component {
  constructor() {
    super();
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }

  forceUpdateState() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h1> Example to generate random number </h1>
        <h3> Random number: {Math.random()} </h3>
        <button onClick={this.forceUpdateState}> Force Update </button>
      </div>
    );
  }
}
*/

// 3. Example of findDOMNode()
// This method allows us to find or access the underlying DOM node
class App extends React.Component {
  constructor() {
    super();
    this.findDomHandler1 = this.findDomHandler1.bind(this);
    this.findDomHandler2 = this.findDomHandler2.bind(this);
  }

  findDomHandler1() {
    var myDiv1 = document.getElementById('myDivOne');
    ReactDom.findDOMNode(myDiv1).style.color = 'red';
  }

  findDomHandler2() {
    var myDiv2 = document.getElementById('myDivTwo');
    ReactDom.findDOMNode(myDiv2).style.color = 'blue';
  }

  render() {
    return (
      <div>
        <h1> ReactJS Find DOM Node Example </h1>
        
        <button onClick={this.findDomHandler1}> Find-Dom_Node1 </button>
        <br/>
        <br/>
        <button onClick={this.findDomHandler2}> Find-Dom_Node2 </button>

        <h3 id = "myDivOne"> JTP-NODE1 </h3>
        <h3 id = "myDivTwo"> JTP-NODE2 </h3>
      </div>
    );
  }
}

export default App;
