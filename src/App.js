import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import { getWeatherFor, getCurrentWeather } from "./utils/axios";

import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cityName: "Brisbane",
            current: {},
            forecasts: [],
            input: "",
            limit: 5,
        };
    }

    componentDidMount() {
        getCurrentWeather("brisbane").then(this.updateCurrentData);
        getWeatherFor("brisbane").then(this.updateData);
    }

    handleChangeLimit = (limit) => {
        this.setState({ limit });
    };

    handleInputChange = (event) => {
        this.setState({ input: event.target.value });
    };

    updateData = (data) => {
        const cityName = data.data.city.name;
        const forecasts = data.data.list.slice(0, 10);
        this.setState({ cityName, forecasts });
        console.log(2222, data);
    };

    updateCurrentData = (data) => {
        const current = data.data;
        const cityName = data.data.name;
        this.setState({ cityName, current });
        console.log(1111, cityName);
    };

    handleSearch = () => {
        getCurrentWeather(this.state.input).then(this.updateCurrentData);
        getWeatherFor(this.state.input).then(this.updateData);
    };

    render() {
        return (
            <div className="weather-channel__container">
                <Header />
                <Navigation
                    handleInputChange={this.handleInputChange}
                    handleSearch={this.handleSearch}
                    input={this.state.input}
                />
                <Main
                    cityName={this.state.cityName}
                    current={this.state.current}
                    forecasts={this.state.forecasts}
                    handleChangeLimit={this.handleChangeLimit}
                    limit={this.state.limit}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
