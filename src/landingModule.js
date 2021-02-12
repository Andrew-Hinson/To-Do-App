import { collectionList, priorityList } from './todoForm.js'
const landing = () => {
    const parentDiv = document.createElement('div')
        parentDiv.setAttribute('class', 'parentDiv')
    const cards = document.createElement('div')
        cards.classList.add('cards')

    let card1 = document.createElement('div')
    card1.classList.add('card')
    card1.innerText = 'Card 1'
    let card2 = document.createElement('div')
    card2.classList.add('card')
    card2.innerText = 'Card 2'
    let card3 = document.createElement('div')
    card3.classList.add('card')
    card3.innerText = 'Card 3'
    let card4 = document.createElement('div')
    card4.classList.add('card')
    card4.innerText = 'Card 4'
    
    cards.appendChild(card1)
    cards.appendChild(card2)
    cards.appendChild(card3)
    cards.appendChild(card4)


    const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', 'buttonContainer')
    
    parentDiv.appendChild(cards)
    
    
    return parentDiv;
}

export { landing }