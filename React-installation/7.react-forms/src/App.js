import React, { Components } from 'react';

/*
// 1. Example of Uncontrolled components in forms
// To write an uncontrolled component, you need to use a ref to get form values from the DOM
class App extends React.Component{
  constructor(props){
    super(props);
    this.updateSubmit = this.updateSubmit.bind(this);
    this.input = React.createRef();
  }

  updateSubmit(event){
    alert('You have entered the Username and Company Name');
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.updateSubmit}>
        <h1> Uncontrolled FOrm Example </h1>
        <label>
          User Name: <input type='text' ref={this.input}/>
        </label>
        <br/><br/>
        <label>
          Company Name: <input type='text' ref={this.input}/>
        </label>
        <br/><br/>
        <input type='submit' value="Submit"/>
      </form>
    );
  }
}
*/

/*
// 2. Example of Controlled components in forms
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('You have submitted the input successfully: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1> Controlled Form Example </h1>
        <label>
          Name:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personGoing: true,
      numberOfPersons: 5
    };

    this.handleinputChanges = this.handleinputChanges.bind(this);

  }

  handleinputChanges(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    alert('The name you entered was: {this.state.personGoing}');
  }

  render() {
    return (
      <form>
        <h1> Multiple Input Controlled Form Example </h1>
        <label>
          Is person going : 
          <input 
            name="personGoing" 
            type='checkbox'
            checked={this.state.personGoing}
            onChange={this.handleinputChanges}
          />
        </label>
        <br/><br/>
        <label>
          Number of persons:
          <input
          name='numberOfPersons'
          type='number'
          value={this.state.numberOfPersons}
          onChange={this.handleinputChanges}
          />
        </label>
      </form>
    );
  }
}
// 3.Handling Multiple Inputs in Controlled Component
export default App;
