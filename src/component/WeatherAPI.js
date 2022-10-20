import axios from 'axios';

const baseUrl = 'http://api.weatherstack.com/current?';
// const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '3dd5d6b56b1a4b3b75d8cafd09a9f3b4';

export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error) {
        throw error;
    }
}