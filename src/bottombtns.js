import { Task , taskData } from './dataHandle.js';

const buttonEvent = () => {
  const flipCardInner = document.querySelector('.flip-card-inner')
  const parent = document.querySelector('.parentDiv')
  const flipForm = document.querySelector('#flipForm')


  parent.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    console.log(e)
    if(target.id === 'addItem' || target.id === 'formDiscard'){ //select only the buttons we want
      flipit() //flip card with no action if discard or +
    }
    if(target.id === 'formSubmit'){
      createTask() //pushes to array with data
      appendToFront() //sticks data to front Div
    }
    if(target.type === 'checkbox'){
      target.setAttribute('checked', '')
    }
  })
  
  const flipit = () => { //toggles the viewpoint between form and display
    flipCardInner.classList.toggle('transform')
  }

  const createTask = () => { //creates new object
    const task = new Task (
        flipForm.elements.title.value,
        flipForm.elements.notes.value,
    )
    taskData.tasks.push(task) //pushes to main array
}
}



export { buttonEvent }