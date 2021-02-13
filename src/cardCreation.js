import { collectionList , priorityList } from './todoForm.js';
const cardCreation = (item) => {
    let i = 0
    const cardParent = document.createElement('div')
        cardParent.classList.add('cardParent')

    const card = document.createElement('div')
        card.classList.add('card')

    const cardTitle = document.createElement('p')  
        cardTitle.innerText = item.title

    const checkbox = () => {
        const checkboxLabel = document.createElement('label')
            checkboxLabel.setAttribute('for',`checkbox${i}`)
            checkboxLabel.classList.add('checkContainer')
            checkboxLabel.innerText = 'Complete: '

        const cardChecked = document.createElement('input')
            cardChecked.setAttribute('type', 'checkbox')
            cardChecked.setAttribute('id',`checkbox${i}`)
        
        const checkSpan = document.createElement('span')
            checkSpan.classList.add('checkmark')

        checkboxLabel.appendChild(cardChecked)
        checkboxLabel.appendChild(checkSpan)
        return checkboxLabel;
    }

    const cardFront = () => {
        const cardFront = document.createElement('div')
        cardFront.classList.add('cardFront')
        cardFront.appendChild(cardTitle)
        
        return cardFront;
    }
    const cardBack = () => {

    }
    i++
    card.appendChild(cardFront())
    card.appendChild(checkbox())
    return card;
    // 
    // const cardBack = document.createElement('div')
}
export { cardCreation }