/*api key 42110e1b9075492e9cb115646231812  */
const apiKey = '42110e1b9075492e9cb115646231812';
const city = 'Barcelona';
const weatherPlace = document.getElementById('weatherPlace');
const weatherImg = document.getElementById('weatherImg');
const weatherText = document.getElementById('weatherText');
const longWeather = document.getElementById('longWeather');

const print = (data) => {
    weatherPlace.innerHTML = `
    <h3>${data.location.name} / ${data.location.country}</h3>
    <p>${data.current.condition.text}</p>
    `
    weatherImg.innerHTML = `
    <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" width="100px"/>
    <p>${data.current.feelslike_c}º</p>
    `
    weatherText.innerHTML = `
    <p>Precipitaciones: ${data.current.precip_in}%</p>
    <p>Humedad: ${data.current.humidity}%</p>
    <p>Viento: ${data.current.wind_kph} km/h</p>
    `
    longWeather.innerHTML = `
    <div>00:00</div>
    <div>01:00</div>
    <div>02:00</div>
    <div>03:00</div>
    <div>04:00</div>
    <div>05:00</div>
    <div>06:00</div>
    <div>07:00</div>
    <div>08:00</div>
    <div>09:00</div>
    <div>10:00</div>
    <div>11:00</div>
    <div>12:00</div>
    <div>13:00</div>
    <div>14:00</div>
    <div>15:00</div>
    <div>16:00</div>
    <div>17:00</div>
    <div>18:00</div>
    <div>19:00</div>
    <div>20:00</div>
    <div>21:00</div>
    <div>22:00</div>
    <div>23:00</div>

    `

} 

const getWeather = async () => {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        if (!res.ok) {
            throw new Error('Ha surgido un error', res.status);
        }
        const data = await res.json();
        let weatherInfo = data;
        print(weatherInfo)
        console.log(weatherInfo)
        console.log()
        return weatherInfo;
    } catch (error) {
        console.log('Eror al obtener los datos', error);
    }
}

getWeather()
