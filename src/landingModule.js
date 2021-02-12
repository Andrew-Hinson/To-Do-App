import { collectionList, priorityList } from './todoForm.js'
const landing = () => {
    const parentDiv = document.createElement('div')
        parentDiv.setAttribute('class', 'parentDiv')
    const cards = document.createElement('div')
        cards.classList.add('cards')
        
    const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', 'buttonContainer')
    
    
    parentDiv.appendChild(cards)
    
    
    return parentDiv;
}

export { landing }