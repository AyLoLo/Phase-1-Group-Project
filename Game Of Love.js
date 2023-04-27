const characterTitle = document.getElementById("title")
const characterFullName = document.getElementById('full-name')
const characterFamily = document.getElementById('family')
const characterImage = document.getElementById('detail-image')
const nav = document.getElementById('character-list')
const commentSection = document.getElementById("comments")
const form = document.getElementById('comment-form')
const addFeelings = document.getElementById('add-feelings')
const loveButton = document.getElementsByClassName('btn')[0]
const hateButton = document.getElementsByClassName('btn')[1]
const characterQuote = document.getElementById("quote")
const initialComments = document.createElement("p")
initialComments.id = "comment"
commentSection.appendChild(initialComments)
const themeSong = document.getElementById("theme-song")




loveButton.addEventListener('click', () => {
    characterImage.src = 'https://media1.giphy.com/media/FWS7G7YkIm415ofAJR/giphy.gif'
})

hateButton.addEventListener('click', () => {
    characterImage.src = 'https://media2.giphy.com/media/3og0IvGtnDyPHCRaYU/giphy.gif'
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const userCommentInputValue = event.target[0].value
    
    const newComment = document.createElement('p')
    newComment.id = "comment"
    newComment.textContent = userCommentInputValue
    commentSection.appendChild(newComment)

})

addFeelings.addEventListener('mouseover', () => {
    addFeelings.value = 'ARE YOU SURE??'
    addFeelings.addEventListener('mouseout', () => {
        addFeelings.value= "Add Feelings"
    })
})


function navDisplay(character) {
    navImages = document.createElement('img')
    navImages.src = character.imageUrl

    navImages.addEventListener("click", () => {
        commentSection.innerHTML = ''
        displayCharacterDetails(character)
    })
    
    nav.appendChild(navImages)
}

function displayCharacterDetails(characters) {
    characterTitle.textContent = characters.title 
    characterFullName.textContent = characters.fullName 
    characterFamily.textContent = characters.family 
    characterImage.src = characters.imageUrl
    characterQuote.textContent = `"${characters.quote}"`
    initialComments.textContent = characters.comments
    
}

fetch(" http://localhost:3000/Characters")
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character=> {
            navDisplay(character)
        });
        displayCharacterDetails(characters[0])
})