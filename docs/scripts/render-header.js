const headerImg = {
    url: "ACES-NYC-square.jpg",
    altText: "Aces NYC",
    width: 200,
    height: 200
}

const navList = [
    { key: "home", title: "Home", page: "index.html" },
    { key: "events", title: "Events", page: "events.html" },
    { key: "resources", title: "Resources", page: "resources.html" },
    { key: "contact", title: "Contact", page: "contact.html" },
]

const headerContainer = document.querySelector('#header-container')
const navContainer = document.querySelector('#nav-container')

const renderHeader = (image) => {
    let headerHTML = `<a href="index.html">
        <img src="${image.url}" alt="${image.altText}" itemprop="logo" width="${image.width}" height="${image.height}" />
    </a>`

    headerContainer.innerHTML = headerHTML
}

const renderNav = (list) => {


    let listHTML = list.map(item => `
    <li class="nav-list-item" key="${item.key}"><a href="${item.page}">${item.title}</a></li>
    `).join('');

    navContainer.innerHTML = `<ul id="nav-list">${listHTML}</ul>`
}

const render = () => {
    renderHeader(headerImg)
    renderNav(navList)
}

render()