document.addEventListener('DOMContentLoaded', () => {
  dogImage();
  dogBreeds();
})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function dogImage() {
  fetch(imgUrl)
  .then((res) => res.json())
  .then(result => {
    console.log(result)
    result.message.forEach(imgURL => renderImg(imgURL)
  )})
}

function renderImg(urlSource) {
  const div = document.querySelector('div')
  const dogImg = document.createElement('img') 
  dogImg.src = urlSource
  div.append(dogImg)
}

function dogBreeds() {
  fetch(breedUrl)
  .then((res) => res.json())
  .then(result => {
    console.log(result)
    const breedKeys = Object.keys(result.message)
    console.log(breedKeys)
    breedKeys.forEach(breedKey => renderBreed(breedKey))
    breedsDropDown()
    })
}

function breedsDropDown() {
  let selectBreed = document.querySelector('#breed-drop-down')
  selectBreed.addEvenListener('change', (e) => {
    const ul = document.querySelector('#dog-breeds')
    ul.textContent = e.target.value
  })
}

function dropDownSelector(letter) {
  renderBreed(breedKey.filter(breedKey => breedKey.startsWith(letter)))
}


function renderBreed(urlSource) {
  const ul = document.querySelector('#dog-breeds')
  const li = document.createElement('li')
  const text = document.createTextNode(urlSource)
  // OR li.innerText = urlSource (instead of createTextNode)
  li.append(text) // this can be removed if innerText used
  ul.append(li)
  li.addEventListener('click', updateTextColor)
}

function updateTextColor(e) {
  e.target.style.color = 'tomato'
}




