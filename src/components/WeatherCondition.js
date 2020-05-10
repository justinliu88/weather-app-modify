import React from "react";

import compass from "../assets/icons/icon-compass.png";
import umbrella from "../assets/icons/icon-umberella.png";
import wind from "../assets/icons/icon-wind.png";

function WeatherCondition(props) {
    console.log(props.current);
    if (props.current.main !== undefined) {
        return (
            <section className="weather-condition">
                <div className="weather-condition__location">
                    {props.cityName}
                </div>
                <div className="weather-condition__temp">
                    {props.current.main.temp} c
                </div>
                <div className="weather-condition__desc">
                    <div>
                        <img src={umbrella} />
                        <span className="citem">
                            {props.current.main.humidity} %
                        </span>
                    </div>
                    <div>
                        <img src={wind} />
                        <span className="citem">
                            {props.current.wind.speed} km/h
                        </span>
                    </div>
                    <div>
                        <img src={compass} />
                        <span className="citem">NE</span>
                    </div>
                </div>
            </section>
        );
    } else {
        console.log("undefined");
        return null;
    }
}

export default WeatherCondition;
