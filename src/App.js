import './App.css';
import image from './47048.jpg';
import imageTwo from './3907187.jpg';
import { GroceryList } from './GroceryList';

function App() {  //Mojno izmenit' etu stroku na podhodyashuiu dlya class component: class App extends Component {. Vverhu vnesti strochku: import { Component } from React
  return (
    <div className="app">

      <div className="container">
        <img src={ image } width="250px" alt="shopping bag" />
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={ imageTwo } width="350px" alt="at the cashier" />
      </div>
    </div>
  );
}

export default App;
