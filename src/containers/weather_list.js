import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units={"K"} /></td>
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
                        <th>Temperature (K)</th>
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
