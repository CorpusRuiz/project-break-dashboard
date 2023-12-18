const hourContainer = document.getElementById('hourContainer');
const dateContainer = document.getElementById('dateContainer');
const sentenceContainer = document.getElementById('sentenceContainer');
const cs1 = 'Es hora de descansar. Apaga y sigue mañana';
const cs2 = 'Buenos días, desayuna fuerte y a darle al código';
const cs3 = 'Echa un rato más pero no olvides comer';
const cs4 = 'Espero que hayas comido';
const cs5 = 'Buenas tardes, el último empujón';
const cs6 = 'Esto ya son horas extras, ... piensa en parar pronto';
const cs7 = 'Buenas noches, es hora de pensar en parar y descansar';




clock = () => {
    const reloj = new Date();
    const hours = reloj.getHours();
    const year = reloj.getFullYear();
    const month = reloj.getMonth() + 1;
    const day = reloj.getDate();
    let timestring = reloj.toLocaleTimeString();
    let clockSentence = '';

    if (hours < 7) { 
        clockSentence = cs1
    } else if (hours >= 7 && hours <12) {
        clockSentence = cs2
    } else if (hours >= 12 && hours <14) {
        clockSentence = cs3
    } else if (hours >= 14 && hours <16) {
        clockSentence = cs4
    } else if (hours >= 16 && hours <18) {
        clockSentence = cs5
    } else if(hours >= 18 && hours <22) {
        clockSentence = cs6
    } else {
        clockSentence = cs7
    }

    hourContainer.innerHTML = `
    <p>${timestring}</p>
    `
    dateContainer.innerHTML = `
    <p>${day}/${month}/${year}</p>
    `
    sentenceContainer.innerHTML = `
    <p>${clockSentence}</p>
    `
    

}

clock()
setInterval(() => {
    clock()
}, 1000);

