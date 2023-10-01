let welcomeText = document.querySelector('.helloText')

let hour = new Date().getHours()
if(hour >= 0 && hour < 12){
    welcomeText.innerHTML = 'Good Morning'
} else {
    welcomeText.innerHTML = 'Good Afternoon'
}

let collectionCardsInfo = [
    {
        image: '../images/liked Icon image.png' ,
        text: 'Liked Songs',
        href: '#'
    },
    {
        image: '../images/liked Icon image.png' ,
        text: 'Liked Songs',
        href: '#'
    },
    {
        image: '../images/liked Icon image.png' ,
        text: 'Liked Songs',
        href: '#'
    },
    {
        image: '../images/liked Icon image.png' ,
        text: 'Liked Songs',
        href: '#'
    },
    {
        image: '../images/liked Icon image.png' ,
        text: 'Liked Songs',
        href: '#'
    },
    {
        image: '../images/liked Icon image.png' ,
        text: 'Liked Songs',
        href: '#'
    },
]

collectionCardsInfo.forEach(element => {
    createCollectionCard(element.image, element.text, element.href)
});

function createCollectionCard(image, text, src) {
    let collectionCardCont = document.querySelector('.collectionsCont')
    let collectionCardAnchor = document.createElement('a')
    collectionCardAnchor.setAttribute('href', src)
    collectionCardAnchor.setAttribute('class', "m-5")
    let collectionCard = document.createElement('div')
    collectionCard.classList.add("collection", "flex", "items-center", "rounded-md", "truncate")
    let collectionImage = document.createElement('img')
    collectionImage.src = image
    let cardTitle = document.createElement('p')
    cardTitle.classList.add("text-white", "text-2xl", "ms-3")
    cardTitle.innerHTML = text
    collectionCard.appendChild(collectionImage)
    collectionCard.appendChild(cardTitle)
    collectionCardAnchor.appendChild(collectionCard)
    collectionCardCont.appendChild(collectionCardAnchor)
    return collectionCardCont
}