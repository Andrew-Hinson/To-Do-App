const buttonEvent = () => {
  const flipCardInner = document.querySelector('.flip-card-inner')
  const parent = document.querySelector('.parentDiv')

  parent.addEventListener('click', (e) => {
    e.preventDefault()
    let flipTarget = e.target
    flipTarget.id === 'addItem' || flipTarget.id === 'formSubmit' ? flipit() : '';
  })
  
  const flipit = () => {
    flipCardInner.classList.toggle('transform')
  }
}

export { buttonEvent }