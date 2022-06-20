const cardArray = [
    {
        name: 'fries',
        Img: 'images/fries.png',
    },
    {
        name: 'donut',
        Img: 'images/donut.png',
    },
    {
        name: 'hamburger',
        Img: 'images/hamburger.png',
    },
    {
        name: 'ramen',
        Img: 'images/ramen.png',
    },
    {
        name: 'pizza',
        Img: 'images/pizza.png',
    },
    {
        name: 'honey',
        Img: 'images/honey.png',
    },
    {
        name: 'meat',
        Img: 'images/meat.png',
    },
    {
        name: 'fries',
        Img: 'images/fries.png',
    },
    {
        name: 'donut',
        Img: 'images/donut.png',
    },
    {
        name: 'hamburger',
        Img: 'images/hamburger.png',
    },
    {
        name: 'ramen',
        Img: 'images/ramen.png',
    },
    {
        name: 'pizza',
        Img: 'images/pizza.png',
    },
    {
        name: 'honey',
        Img: 'images/honey.png',
    },
    {
        name: 'meat',
        Img: 'images/meat.png',
    },
    
]

//console.log(cardArray)

cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.getElementById('grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []

//console.log(gridDisplay)

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      gridDisplay.appendChild(card)
      //console.log(card, i)
  }    
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    console.log ('check for match')
    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }

    if (cardChosen[0] == cardChosen[1]) {
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
        
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again!')
    }
    
    cardChosen = []
    cardChosenIds = []
    resultDisplay.innerHTML = cardsWon.length
    if (cardsWon.length == cardArray.length/2) {
      resultDisplay.innerHTML = 'Congratulations you found them all!'
    }
}


function flipCard () {
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].Img)
    if (cardChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}