import React, { Component } from 'react';
/*
// Example of Props and Default props
class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome to {this.props.name} </h1>
        <p> <h4> This is example of ReactJS props </h4></p>
      </div>
    );
  }
}

App.defaultProps = {  
  name: "JavaTpoint!"  
}  
*/

//State and Prop example - Passing state as a prop to child component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "ReactJS" }
  }
  render() {
    return (
      <div>
        <JTP jtpProp={this.state.name} />
      </div>
    );
  }
}

class JTP extends React.Component {
  render() {
    return (
      <div>
        <h1> State and Prop example </h1>
        <h3> Welcome to {this.props.jtpProp} </h3>
        <p>Javatpoint tutorials.</p>
      </div>
    );
  }
}

export default App;
