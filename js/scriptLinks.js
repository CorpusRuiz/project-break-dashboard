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

/*-backgroundimage-*/

const randomImg = () => {
    document.body.style.backgroundImage = `url('./assets/img/img${Math.floor(Math.random() * 6) + 1}.jpg')`
}
randomImg()
setInterval(() => {
    randomImg()
}, 15000);
