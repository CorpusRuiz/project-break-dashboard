let urlName = document.getElementById('urlName');
let url = document.getElementById('url');
const UrlButton = document.getElementById('UrlButton');
const savedUrlCard = document.getElementById('savedUrlCard');


print = () => {

    savedUrlCard.innerHTML += `
    <div class="urlCard">
    <h3>${urlName}</h3>
    <p>${url}</p>
    </div>
    <button>x</button>
    `
}

UrlButton.addEventListener('click', () => {
    localStorage.setItem(urlName.value, url.value)
    console.log(localStorage)
})