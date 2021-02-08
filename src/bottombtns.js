const buttonEvent = () => {
    const addToDo = document.querySelector('#addItem')
    const flipCardInner = document.querySelector('.flip-card-inner')

    
    addToDo.addEventListener('click', () => {
      flipCardInner.classList.toggle('transform')
    })
}

export { buttonEvent }