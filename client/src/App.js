import './App.css';
import React from 'react';
import InputRestos from './Components/InputRestos';
import ChosenResto from './Components/ChosenResto';


function App() {
  return (
   <div className='container'>
    <ChosenResto />
    <InputRestos />
  </div>
  );
}

export default App;
