import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      actual: "",
      feels_like: "",
      humidity: "",
      temp_max: "",
      temp_min: "",
    };
  }
  componentDidMount() {
    this.Consulta("bogota");
  }
  async Consulta(name) {
    let url =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      name +
      "&appid=b8e051523836c88159c71b1d5811143f";
    let res = await fetch(url);
    let city = await res.json();
    console.dir(city);
    this.setState({
      name: city.city.name,
      actual: city.list[0].main.temp,
      feels_like: city.list[0].main.feels_like,
      humidity: city.list[0].main.humidity,
      temp_max: city.list[0].main.temp_max,
      temp_min: city.list[0].main.temp_min,
    });
  }

  despliegue(e) {
    const periodo = document.querySelector(".period");
    periodo.classList.add(".period-active");
    if (periodo.classList.contains(".period-active")) {
      return (document.querySelector(".estado").innerHTML =
        "<div><p>240°F</p></div>");
    } else {
      periodo.classList.add(".period-active");
      return (document.querySelector(".estado").innerHTML =
        "<div><p></p></div>");
    }
  }

  render() {
    let { name, actual, feels_like, humidity, temp_max, temp_min } = this.state;
    return (
      <div>
        <form
          className="form row justify-content-center my-2 w-100"
          style={{ width: "200px" }}
        >
          <input
            className="form-control col-6"
            id="buscador"
            type="search"
            placeholder="Busca una ciudad"
            aria-label="Search"
          />
          <button className="btn btn-success" id="boton" type="submit">
            Search
          </button>
        </form>
        <div className="bg-dark text-center" id="ciudad">
          <h1 className="text-light">{name}</h1>
          <p className="text-light">
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            {actual}°F
          </p>
          <p className="text-light"><FontAwesomeIcon icon={faUniversalAccess}></FontAwesomeIcon>Se siente como: {feels_like}°F</p>
          <p className="text-light">Temperatura minima: {temp_min}°F</p>
          <p className="text-light">Temperatura máxima: {temp_max}°F </p>
          <h4 className="text-light">Humedad: {humidity}</h4>
          <div className="container">
            <div className="row justify-content-center">
              <div className="timeline" onClick={this.despliegue}>
                <span className="period">Ahora</span>
                <span className="period">12pm</span>
                <span className="period">1pm</span>
                <span className="period period-active">2pm</span>
                <span className="period">3pm</span>
                <span className="period">4pm</span>
              </div>
              <div className="estado d-block text-light"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buscador;
