const landing = () => {
    const mainDiv = document.createElement('div')
        mainDiv.setAttribute('class', 'parentDiv')
    const buttonContainer = document.createElement('div')
        buttonContainer.setAttribute('id', 'buttonContainer')
    const checkArea = () => {
        const checkDiv = document.createElement('div')    
        checkDiv.setAttribute('id', 'checkDiv')
        checkDiv.setAttribute('class', 'childDiv')
        checkDiv.classList = 'childDiv flip-card'
            const flipCardInner = document.createElement('div')
            flipCardInner.classList = 'flip-card-inner'
                const flipCardFront = document.createElement('div')
                flipCardFront.classList = 'flip-card-front'
                flipCardFront.innerText = 'check it out'
            const flipCardBack = document.createElement('div')
            flipCardBack.classList = 'flip-card-back'
            flipCardBack.innerText = 'yo straight up this is cool'
        flipCardInner.appendChild(flipCardFront)
        flipCardInner.appendChild(flipCardBack)
        checkDiv.appendChild(flipCardInner)
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