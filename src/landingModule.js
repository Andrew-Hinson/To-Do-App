import { createForm } from './todoForm.js'
const landing = () => {
    const headDiv = document.createElement('div')
        headDiv.setAttribute('id', 'headDiv')
    const parentDiv = document.createElement('div')
        parentDiv.setAttribute('class', 'parentDiv')
    const cards = document.createElement('div')
        cards.classList.add('cards')
        cards.innerText = 'Content'
    const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', 'buttonContainer')
    
    headDiv.appendChild(createForm())
    
    parentDiv.appendChild(headDiv)
    parentDiv.appendChild(cards)
    
    
    return parentDiv;
}

export { landing }