import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import { useState } from 'react';

function App() {
  const [name,setName]=useState([])
  const addName=(justName)=>{
    const newName=[...name,justName];
    setName(newName);

  }
  return (
    <div className="App">
      <Header></Header>
      <Countries addName={addName} name={name}></Countries>
    </div>
  );
}

export default App;
