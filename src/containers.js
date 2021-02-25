const workContainer = () => {
    const container = document.createElement('div')
    container.classList.add('cards')
    container.setAttribute('id', 'workContainer')
    return container;
}

const studyContainer = () => {
    const container = document.createElement('div')
    container.classList.add('cards')
    container.setAttribute('id', 'studyContainer')
    return container;
}

const personalContainer = () => {
    const container = document.createElement('div')
    container.classList.add('cards')
    container.setAttribute('id', 'personalContainer')
    return container;
}

const choresContainer = () => {
    const container = document.createElement('div')
    container.classList.add('cards')
    container.setAttribute('id', 'choresContainer')
    return container;
}

export {workContainer, studyContainer, personalContainer, choresContainer}