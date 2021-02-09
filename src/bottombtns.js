import { taskData } from './dataHandle.js';
import { createTask } from './objectCreation.js';
const buttonEvent = () => {
  const flipCardInner = document.querySelector('.flip-card-inner')
  const parent = document.querySelector('.parentDiv')

  parent.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    if(target.id === 'addItem'){
      flipit()
    }
    if(target.id === 'formSubmit'){
      flipit()
    }
    if(target.id === 'formDiscard'){
      //do not push data
      flipit()
    }
  })
  
  const flipit = () => {
    flipCardInner.classList.toggle('transform')
  }

  const appendToFront = () => {
    const lastIndex = taskData.tasks.length - 1;
    taskData.tasks.map((task, i) => {

    })
  }
}



export { buttonEvent }