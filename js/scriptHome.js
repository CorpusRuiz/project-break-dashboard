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

/* Password generator script */

let passwordLength = document.getElementById('passwordLength');
const newPassword = document.getElementById('newPassword');
const buttonPassword = document.getElementById('buttonPassword');
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()-_=+";

print = (passLength, password) => {
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

createPassword = (lenght) => {
    let password = "";
    for (let i = 0; i < lenght; i++) {
        let random = Math.floor(Math.random() * mayusculas.length);
        password += mayusculas.charAt(random)
    }
    return password
}

buttonPassword.addEventListener('click', () => {
    let newPasswordLength = passwordLength.value
    print(newPasswordLength, createPassword(newPasswordLength))
})

