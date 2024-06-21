import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "ReactJS" };
    this.changeState = this.changeState.bind(this);
  }

  render() {
    return (
      <div>
        <h1> ReactJS component's life Cycle </h1>
        <h3> Hello {this.state.hello} </h3>
        <button onClick={this.changeState}> Click Here! </button>
      </div>
    );
  }

  // Part of Mounting Phase
  componentWillMount() {
    console.log('Component will MOUNT!')
  }

  // Part of Mounting Phase
  componentDidMount() {
    console.log('Component did MOUNT!')
  }

  // Part of Updating Phase
  changeState() {
    this.setState({ hello: "It's great ReactJS Tutorial" });
  }

  // Part of Updating Phase
  componentWillReceiveProps(newProps) {
    console.log('Componet Will receive props!')
  }

  // Part of Updating Phase
  shouldComponentUpdate() {
    return true;
  }

  // Part of Updating Phase
  componentWillUpdate(nextProps, nextState) {
    console.log('Component Will UPDATE!');
  }

  // Part of Updating Phase
  componentDidUpdate(prevProps, prevState) {
    console.log('Component did UPDATE!')
  }

  // Part of Unmounting Phase

  componentWillUnmount() {
    console.log('Component Will UNMOUNT!');
  }
}
export default App;
