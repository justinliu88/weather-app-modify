import axios from 'axios'

const API_KEY = "6e41c655f9339921c7ebd5bad96fd981";
export const getWeatherFor = (city) => {
    return axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
}

export const getCurrentWeather = (city) => {
    return axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
}