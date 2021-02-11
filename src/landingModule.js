import { createForm } from './todoForm.js'
const landing = () => {
    const headDiv = document.createElement('div')
        headDiv.setAttribute('id', 'headDiv')
    const mainDiv = document.createElement('div')
        mainDiv.setAttribute('class', 'parentDiv')
    const cards = document.createElement('div')
        cards.classList.add('cards')
        cards.innerText = 'Content'
    const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', 'buttonContainer')
        
    const generateTitle = () => {
        const title = document.createElement('h1')
        title.innerText = 'CHECKED'
        return title;
    }
    const deletedBtn = () => {
        const deleteButton = document.createElement('button')
        deleteButton.setAttribute('id', 'delete')
        deleteButton.setAttribute('class', 'bottomOptions')
        deleteButton.innerText = 'Deleted'
        return deleteButton;
    }
    const completedBtn = () => {
        const completedButton = document.createElement('button')
        completedButton.setAttribute('id', 'completed')
        completedButton.setAttribute('class', 'bottomOptions')
        completedButton.innerText = 'Completed'
        return completedButton;
    }
    const addItem = () => {
        const newButton = document.createElement('button')
        newButton.setAttribute('id', 'addItem')
        newButton.innerText = '+'
        return newButton;
    }

    
      //form from todoForm.js
    buttonContainer.appendChild(deletedBtn())
    buttonContainer.appendChild(addItem())
    buttonContainer.appendChild(completedBtn())
    headDiv.appendChild(generateTitle())
    headDiv.appendChild(buttonContainer)
    headDiv.appendChild(createForm())
    mainDiv.appendChild(headDiv)
    mainDiv.appendChild(cards)
    
    return mainDiv;
}

export { landing }