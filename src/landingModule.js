const landing = () => {
    const mainDiv = document.createElement('div')

    const checkArea = () => {
        const checkDiv = document.createElement('div')    
        checkDiv.setAttribute('id', 'checkDiv')
        checkDiv.setAttribute('class', 'standardview')
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
        deleteButton.innerText = 'Deleted Items'
        return deleteButton;
    }
    const completedBtn = () => {
        const completedButton = document.createElement('button')
        completedButton.setAttribute('id', 'completed')
        completedButton.setAttribute('class', 'bottomOptions')
        completedButton.innerText = 'Completed Items'
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
    mainDiv.appendChild(deletedBtn())
    mainDiv.appendChild(addItem())
    mainDiv.appendChild(completedBtn())
    return mainDiv;
}
export { landing }