import React, { Component } from 'react';

/*
//Example 1 - Add Ref to DOM elements
class App extends React.Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef();
    this.addingRefInput = this.addingRefInput.bind(this);
  }

  addingRefInput() {
    this.callRef.current.focus();
  }

  render() {
    return (
      <div>
        <h2> Adding Red to DOM element </h2>
        <input
          type='text'
          ref={this.callRef}
        />
        <input
          type='botton'
          value='Add text input'
          onClick={this.addingRefInputnpm}
        />
      </div>
    );
  }

}
*/

//Example 2 - Add Ref to Class components

function CustomInput(props){

  let callRefInput = React.createRef();

  function handleClick() {
    callRefInput.current.focus();
  }

  return(
    <div>
      <h2> Adding Ref to Class component </h2>
      <input
        type='text'
        ref={callRefInput}
      />
      <input
        type='button'
        value='Focus input'
        onClick={handleClick}
      />
    </div>
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.callRefInput = React.createRef();
  }

  focusRefInput(){
    this.callRefInput.current.focus();
  }

  render(){
    return(
      <CustomInput ref={this.callRefInput}/>
    );
  }
}
export default App;
