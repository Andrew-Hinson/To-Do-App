const landing = () => {
    const mainDiv = document.createElement('div')
        mainDiv.setAttribute('class', 'parentDiv')
    const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', 'buttonContainer')
    const checkArea = () => {
        const checkDiv = document.createElement('div')    
        checkDiv.setAttribute('id', 'checkDiv')
        checkDiv.setAttribute('class', 'childDiv')
        return checkDiv;
    }
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

    mainDiv.appendChild(generateTitle())
    mainDiv.appendChild(checkArea())
    buttonContainer.appendChild(deletedBtn())
    buttonContainer.appendChild(addItem())
    buttonContainer.appendChild(completedBtn())
    mainDiv.appendChild(buttonContainer)
    return mainDiv;
}
export { landing }