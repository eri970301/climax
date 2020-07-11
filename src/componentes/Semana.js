import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faCloudSun } from "@fortawesome/free-solid-svg-icons";

class Semanal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      max_temp: "",
      min_temp: "",
      day: "",
      description: "",
    };
  }
  componentDidMount() {
    this.Consulta("bogota");
  }
  async Consulta(name) {
    let url =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      name +
      "&appid=b8e051523836c88159c71b1d5811143f";
    let res = await fetch(url);
    let city = await res.json();
    console.dir(city);
    this.setState({
      max_temp: city.list[0].main.temp_max,
      min_temp: city.list[0].main.temp_min,
      day: city.list[0].dt_txt,
      description: city.list[0].weather[0].description,
    });
    console.log(this.state.max_temp);
  }

  render() {
    let { max_temp, min_temp, day, description } = this.state;
    return (
      <div className="text-center">
        <h1>{description}</h1>
        <div className="row justify-content-center daily">
          <p className="col-4">{day}</p>
          <p className="col-4">
            <FontAwesomeIcon icon={faCloudSun}></FontAwesomeIcon>Max.
            temperature: {max_temp}
          </p>
          <p className="col-4">Min. temperature: {min_temp}</p>
        </div>
        <div className="row justify-content-center daily">
          <p className="col-4">Sat.</p>
          <p className="col-4">
            <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>Max.
            temperature: {max_temp}
          </p>
          <p className="col-4">Min. temperature: {min_temp}</p>
        </div>
        <div className="row justify-content-center daily">
          <p className="col-4">Sun.</p>
          <p className="col-4">
            <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>Max.
            temperature: {max_temp}
          </p>
          <p className="col-4">Min. temperature: {min_temp}</p>
        </div>
        <div className="row justify-content-center daily">
          <p className="col-4">Mon.</p>
          <p className="col-4">
            <FontAwesomeIcon icon={faCloudSun}></FontAwesomeIcon>Max.
            temperature: {max_temp}
          </p>
          <p className="col-4">Min. temperature: {min_temp}</p>
        </div>
        <div className="row justify-content-center daily">
          <p className="col-4">Thu.</p>
          <p className="col-4">
            <FontAwesomeIcon icon={faCloudRain}></FontAwesomeIcon>Max.
            temperature: {max_temp}
          </p>
          <p className="col-4">Min. temperature: {min_temp}</p>
        </div>
        <div className="row justify-content-center daily">
          <p className="col-4">Wed.</p>
          <p className="col-4">
            <FontAwesomeIcon icon={faCloudSun}></FontAwesomeIcon>Max.
            temperature: {max_temp}
          </p>
          <p className="col-4">Min. temperature: {min_temp}</p>
        </div>
        <div className="row justify-content-center daily">
          <p className="col-4">Thurs.</p>
          <p className="col-4">
            <FontAwesomeIcon icon={faCloudSun}></FontAwesomeIcon>Max.
            temperature: {max_temp}
          </p>
          <p className="col-4">Min. temperature: {min_temp}</p>
        </div>
      </div>
    );
  }
}

export default Semanal;
