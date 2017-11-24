import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';

// T(K) × 9/5 - 459.67 Kelvin -> Fahrenheit

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const tempsInF = _.map(cityData.list.map(weather => weather.main.temp), (tempInK) => _.round(tempInK * (9/5) - 459.67));
        console.log("Temperature in F: ", tempsInF);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={tempsInF} color="orange" units={"℉"} /></td>
                <td><Chart data={pressures} color="green" units={"hPa"} /></td>
                <td><Chart data={humidities} color="black" units={"%"} /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (℉)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

/*
// Non ES6 Example
function mapStateToProps(state) {
    return { weather: state.weather };
}
// Using ES6 Syntax
function mapStateToProps({ weather }) { // const weather = state.weather    
    return { weather: weather };
}
*/
// Using ES6 Syntax Better
function mapStateToProps({ weather }) {     
    return { weather }; // { weather } === { weather: weather }
}

// Exporting the connected version of WeatherList
export default connect(mapStateToProps)(WeatherList);
