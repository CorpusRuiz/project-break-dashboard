/* Clock Script */

const hourContainer = document.getElementById('hourContainer');
const dateContainer = document.getElementById('dateContainer');

clock = () => {
    const reloj = new Date();
    const year = reloj.getFullYear();
    const month = reloj.getMonth() + 1;
    const day = reloj.getDate();
    let timestring = reloj.toLocaleTimeString();

    hourContainer.innerHTML = `
    <p>${timestring}</p>
    `
    dateContainer.innerHTML = `
    <p>${day}/${month}/${year}</p>
    `
}

clock()
setInterval(() => {
    clock()
}, 1000);

/* Links scrip */

/* Weather scrip */

const apiKey = '42110e1b9075492e9cb115646231812';
const city = 'Barcelona';
const weatherPlace = document.getElementById('weatherPlace');
const weatherImg = document.getElementById('weatherImg');
const weatherText = document.getElementById('weatherText');
const longWeather = document.getElementById('longWeather');

const printWeather = (data) => {
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
} 

const getWeather = async () => {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`);
        if (!res.ok) {
            throw new Error('Ha surgido un error', res.status);
        }
        const data = await res.json();
        let weatherInfo = data;
        printWeather(weatherInfo)
        return weatherInfo;
    } catch (error) {
        console.log('Eror al obtener los datos', error);
    }
}

getWeather()

/* Password generator script */

let passwordLength = document.getElementById('passwordLength');
const newPassword = document.getElementById('newPassword');
const buttonPassword = document.getElementById('buttonPassword');
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";
const all = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+';

const printPassword = (passLength, password) => {
    if (passLength < 12) {
        newPassword.innerHTML = `Error: genera contraseñas con minimo 12 caracteres`
    }
    else if (passLength > 50) {
        newPassword.innerHTML = `Error: genera contraseñas con maximo 50 caracteres`
    }
    else {
    newPassword.innerHTML = `
    <h3>Contraseña Generada:<h3>
    ${password}
    `
    }
}

const createPassword = (lenght) => {
    let randomA = Math.floor(Math.random() * mayusculas.length);
    let randoma = Math.floor(Math.random() * minusculas.length);
    let randomN = Math.floor(Math.random() * numeros.length);
    let randomS = Math.floor(Math.random() * simbolos.length);

    let password = mayusculas.charAt(randomA)+minusculas.charAt(randoma)+numeros.charAt(randomN)+simbolos.charAt(randomS);

    for (let i = 0; i < (lenght -4); i++) {
        let randomAll = Math.floor(Math.random() * all.length);
        password += all.charAt(randomAll)
    }
    return password
}

buttonPassword.addEventListener('click', () => {
    let newPasswordLength = passwordLength.value
    printPassword(newPasswordLength, createPassword(newPasswordLength))
})

