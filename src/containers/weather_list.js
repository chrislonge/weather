import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color='red' />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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
