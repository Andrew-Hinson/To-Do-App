import { taskData } from './dataHandle.js';
import { appendToFront } from './appendData.js';
import { createTask } from "./objectCreation";
const buttonEvent = () => {
  const flipCardInner = document.querySelector('.flip-card-inner')
  const parent = document.querySelector('.parentDiv')

  parent.addEventListener('click', (e) => {
    e.preventDefault()
    let target = e.target
    if(target.id === 'addItem' || target.id === 'formDiscard'){
      flipit()
    }
    if(target.id === 'formSubmit'){
      createTask()
      appendToFront()
      flipit()
    }
  })
  
  const flipit = () => {
    flipCardInner.classList.toggle('transform')
  }
}



export { buttonEvent }