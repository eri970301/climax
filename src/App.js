import React, { Component } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Buscador from "./componentes/Buscador";
import Semanal from "./componentes/Semana";
import Footer from "./componentes/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Buscador></Buscador>
        <Semanal></Semanal>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
