import logo from './logo.svg';
import './App.css';

function Car(props) {
  return <li> I am a {props.brand}</li>
}

function App(props) {
  const cars = ['Ford', 'BMW', 'Audi']; // General list 

  //Key-value pair list
  const cars2 = [
    {id: 1, make: 'Honda'}, {id: 2, make: 'Renault'}, {id: 3, make: 'Audi'}
  ];
  return (
    < div >
      <h2> Rendering Lists inside component </h2>
      <h2> Who lives in my garage? </h2>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>

      <h2> Example of Key-Value pair list</h2>
      <ul>
        {cars2.map((car) => < Car key={car.id} brand={car.make}/> )}
      </ul>
    </div >
  );
}

export default App;
