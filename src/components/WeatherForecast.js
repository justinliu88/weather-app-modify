import React from "react";
import { format } from "date-fns";

import ForecastRow from "./ForecastRow";

class WeatherForecast extends React.Component {
    render() {
        const { limit } = this.props;
        const forecasts = this.props.forecasts.slice(0, limit);

        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button
                        className={`forecast__switch_0${
                            limit === 5 ? " switch-active" : ""
                        }`}
                        onClick={() => this.props.handleChangeLimit(5)}
                    >
                        5 items
                    </button>
                    <button
                        className={`forecast__switch_1${
                            limit === 10 ? " switch-active" : ""
                        }`}
                        onClick={() => this.props.handleChangeLimit(10)}
                    >
                        10 items
                    </button>
                </div>
                {forecasts.map((forecast) => {
                    const date = new Date(forecast.dt * 1000);
                    const day = format(date, "EEE");
                    const time = format(date, "HH:mm");

                    return (
                        <ForecastRow
                            key={date}
                            day={day}
                            high={forecast.main.temp_max}
                            low={forecast.main.temp_min}
                            time={time}
                        />
                    );
                })}
            </section>
        );
    }
}

export default WeatherForecast;
