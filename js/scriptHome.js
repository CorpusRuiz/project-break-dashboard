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
    <p class="white">${timestring}</p>
    `
    dateContainer.innerHTML = `
    <p class="white">${day}/${month}/${year}</p>
    `
}

clock()
setInterval(() => {
    clock()
}, 1000);

/* Links scrip */

let urlName = document.getElementById('urlName');
let url = document.getElementById('url');
const UrlButton = document.getElementById('UrlButton');
const savedUrlCard = document.getElementById('savedUrlCard');

const openStorage = () => {
    let links = localStorage.getItem('links');
    return links ? JSON.parse(links) : [];
}

const clear = () => {
    urlName.value = "";
    url.value = "";
}

const saveLink = (objectUrl) => {
    var links = openStorage();
    links.push(objectUrl);
    localStorage.setItem('links', JSON.stringify(links));
}

const  newLink = () => {
    const name = urlName.value;
    const link = url.value;
    if (name && link) {
        let objectUrl = { title: name, url: link };
        saveLink(objectUrl);
    } else {
        alert('Rellena ambos campos.');
    }
}

const deleteLink = (title) => {
    const links = openStorage();
    const filteredLinks = links.filter(link => {
        return link.title !== title;
    });
    localStorage.setItem('links', JSON.stringify(filteredLinks));
    printLinks();
}

const printLinks = () => {
    savedUrlCard.innerHTML = '';

    const links = openStorage();
    links.forEach(link => {
        savedUrlCard.innerHTML += `
        <div class="linkcard">
        <button class="deletebutton" onclick="deleteLink('${link.title}')">x</button>
        <a href="${link.url}" target="_blank">${link.title}</a>
        </div>
        `;
    });
}

UrlButton.addEventListener('click', () => {
    newLink()
    printLinks();
    clear()
})

printLinks()


/* Weather scrip */

const apiKey = '42110e1b9075492e9cb115646231812';
const city = 'Barcelona';
const weatherPlace = document.getElementById('weatherPlace');
const weatherImg = document.getElementById('weatherImg');
const weatherText = document.getElementById('weatherText');
const longWeather = document.getElementById('longWeather');

const printWeather = (data) => {

    const {forecast} = data;
    const {forecastday} = forecast;
    const {0:object} = forecastday;
    const {hour} = object;
    const {0:h1, 1:h2, 2:h3, 3:h4, 4:h5, 5:h6, 6:h7, 7:h8, 8:h9, 9:h10, 10:h11, 11:h12, 12:h13, 13:h14, 14:h15, 15:h16, 16:h17, 17:h18, 18:h19, 19:h20, 20:h21, 21:h22, 22:h23, 23:h24} = hour

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
    <div>00:00 <img src="${h1.condition.icon}" alt="${h1.condition.text}" width="50px" /> ${h1.feelslike_c}º</div>
    <div>01:00 <img src="${h2.condition.icon}" alt="${h2.condition.text}" width="50px" /> ${h2.feelslike_c}º</div>
    <div>02:00 <img src="${h3.condition.icon}" alt="${h3.condition.text}" width="50px" /> ${h3.feelslike_c}º</div>
    <div>03:00 <img src="${h4.condition.icon}" alt="${h4.condition.text}" width="50px" /> ${h4.feelslike_c}º</div>
    <div>04:00 <img src="${h5.condition.icon}" alt="${h5.condition.text}" width="50px" /> ${h5.feelslike_c}º</div>
    <div>05:00 <img src="${h6.condition.icon}" alt="${h6.condition.text}" width="50px" /> ${h6.feelslike_c}º</div>
    <div>06:00 <img src="${h7.condition.icon}" alt="${h7.condition.text}" width="50px" /> ${h7.feelslike_c}º</div>
    <div>07:00 <img src="${h8.condition.icon}" alt="${h8.condition.text}" width="50px" /> ${h8.feelslike_c}º</div>
    <div>08:00 <img src="${h9.condition.icon}" alt="${h9.condition.text}" width="50px" /> ${h9.feelslike_c}º</div>
    <div>09:00 <img src="${h10.condition.icon}" alt="${h10.condition.text}" width="50px" /> ${h10.feelslike_c}º</div>
    <div>10:00 <img src="${h11.condition.icon}" alt="${h11.condition.text}" width="50px" /> ${h11.feelslike_c}º</div>
    <div>11:00 <img src="${h12.condition.icon}" alt="${h12.condition.text}" width="50px" /> ${h12.feelslike_c}º</div>
    <div>12:00 <img src="${h13.condition.icon}" alt="${h13.condition.text}" width="50px" /> ${h13.feelslike_c}º</div>
    <div>13:00 <img src="${h14.condition.icon}" alt="${h14.condition.text}" width="50px" /> ${h14.feelslike_c}º</div>
    <div>14:00 <img src="${h15.condition.icon}" alt="${h15.condition.text}" width="50px" /> ${h15.feelslike_c}º</div>
    <div>15:00 <img src="${h16.condition.icon}" alt="${h16.condition.text}" width="50px" /> ${h16.feelslike_c}º</div>
    <div>16:00 <img src="${h17.condition.icon}" alt="${h17.condition.text}" width="50px" /> ${h17.feelslike_c}º</div>
    <div>17:00 <img src="${h18.condition.icon}" alt="${h18.condition.text}" width="50px" /> ${h18.feelslike_c}º</div>
    <div>18:00 <img src="${h19.condition.icon}" alt="${h19.condition.text}" width="50px" /> ${h19.feelslike_c}º</div>
    <div>19:00 <img src="${h20.condition.icon}" alt="${h20.condition.text}" width="50px" /> ${h20.feelslike_c}º</div>
    <div>20:00 <img src="${h21.condition.icon}" alt="${h21.condition.text}" width="50px" /> ${h21.feelslike_c}º</div>
    <div>21:00 <img src="${h22.condition.icon}" alt="${h22.condition.text}" width="50px" /> ${h22.feelslike_c}º</div>
    <div>22:00 <img src="${h23.condition.icon}" alt="${h23.condition.text}" width="50px" /> ${h23.feelslike_c}º</div>
    <div>23:00 <img src="${h24.condition.icon}" alt="${h24.condition.text}" width="50px" /> ${h24.feelslike_c}º</div>
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

/* img background */

const randomImg = () => {
    document.body.style.backgroundImage = `url('./assets/img/img${Math.floor(Math.random() * 6) + 1}.jpg')`
}
randomImg()
setInterval(() => {
    randomImg()
}, 5000);