import './App.css';
import React, {useState} from 'react';
import InputRestos from './Components/InputRestos';
import ChosenResto from './Components/ChosenResto';
import Going from './Components/Going';
import Header from './Components/Header';


const App = () => {

  const [randomResto, setRandomResto] = useState(null);
  const [showResto, setShowResto] = useState(false);

  return (
    <div className="flex flex-col items-center h-screen mt-40 space-y-6">
    <Header />
    <ChosenResto setRandomResto={setRandomResto} setShowResto={setShowResto}/>
    <InputRestos />
    <Going randomResto={randomResto} showResto={showResto}/>
  </div>
  );
}

export default App;

