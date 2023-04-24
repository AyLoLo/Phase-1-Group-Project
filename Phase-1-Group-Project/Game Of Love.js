const characterTitle = document.getElementById('title')
const characterFullName = document.getElementById('full-name')
const characterDescription = document.getElementById('description')
const characterImage = document.getElementById('detail-image')
const nav = document.getElementById('character-list')

function navDisplay(character) {
    navImages = document.createElement('img')
    navImages.src = character.imageUrl
    nav.appendChild(navImages)
}

fetch(" http://localhost:3000/Characters")
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character=> {
            navDisplay(character)
        });
    })

