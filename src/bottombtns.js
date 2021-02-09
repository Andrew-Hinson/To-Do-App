import { Task , taskData } from './dataHandle.js';
import { appendToFront } from './appendData.js';
const buttonEvent = () => {
  const flipCardInner = document.querySelector('.flip-card-inner')
  const parent = document.querySelector('.parentDiv')
  const flipForm = document.querySelector('#flipForm')
  parent.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    if(target.id === 'addItem' || target.id === 'formDiscard'){
      flipit()
    }
    if(target.id === 'formSubmit'){
      createTask()
    }
  })
  
  const flipit = () => {
    flipCardInner.classList.toggle('transform')
  }
  const createTask = () => {
    const task = new Task (
        flipForm.elements.title.value,
        flipForm.elements.notes.value,
    )
    taskData.tasks.push(task) //pushes to main array
}
}



export { buttonEvent }