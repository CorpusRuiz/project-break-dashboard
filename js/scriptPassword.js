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

/*-backgroundimage-*/

const randomImg = () => {
    document.body.style.backgroundImage = `url('./assets/img/img${Math.floor(Math.random() * 6) + 1}.jpg')`
}
randomImg()
setInterval(() => {
    randomImg()
}, 5000);
