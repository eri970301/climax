import React from 'react'
import './App.css';
import Header from './componentes/Header'
import Buscador from './componentes/Buscador'
import Semanal from './componentes/Semana'

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Buscador></Buscador>
     <Semanal></Semanal>
    </div>
  );
}

export default App;
