let i = 0
const buttonEvent = () => {
    const addToDo = document.querySelector('#addItem')
    const flipCardInner = document.querySelector('.flip-card-inner')
    addToDo.addEventListener('click', () => {
      flipCardInner.classList.toggle('transform')
    })
}

// const createToDoDiv = () => {
//   const checkDiv = document.querySelector('#checkDiv')
//   const listItem = document.createElement('div')
//   listItem.setAttribute('class', 'todo')
//   listItem.setAttribute('id', `${i}`)
//   listItem.innerText = 'ITEM'
//   checkDiv.appendChild(listItem)
// }


export { buttonEvent }