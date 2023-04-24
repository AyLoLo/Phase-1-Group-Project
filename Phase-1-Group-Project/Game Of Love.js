const characterTitle = document.getElementById('title')
const characterFullName = document.getElementById('full-name')
const characterFamily = document.getElementById('family')
const characterImage = document.getElementById('detail-image')
const nav = document.getElementById('character-list')
const commentSection = document.getElementById("comments")
const form = document.getElementById('comment-form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const userCommentInputValue = event.target[0].value
    const newComment = document.createElement('p')
    newComment.id = "User-Comment"
    
    newComment.textContent = userCommentInputValue
    commentSection.appendChild(newComment)

})

function navDisplay(character) {
    navImages = document.createElement('img')
    navImages.src = character.imageUrl
    
    navImages.addEventListener("click", () => {
        displayCharacterDetails(character)
    })

    navImages.addEventListener("mouseover", () => {
        
    })
     
    
    nav.appendChild(navImages)
}

function displayCharacterDetails(characters) {
    characterTitle.textContent = characters.title 
    characterFullName.textContent = characters.fullName 
    characterFamily.textContent = characters.family 
    characterImage.src = characters.imageUrl
}



fetch(" http://localhost:3000/Characters")
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character=> {
            navDisplay(character)
        });
        displayCharacterDetails(characters[0])
    })

