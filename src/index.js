import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';



landing()


const cancel = document.querySelector('#cancel');
const newFlip = document.querySelector('.newFlip');
// const cancel = document.querySelector('#cancel');
const dialog = document.querySelector('#dialog');

const cards = document.querySelector('.cards')
const accept = document.querySelector('#accept')

const titleInput = document.querySelector('#titleInput')
// when button is clicked for accept, create new task and push to class Display
const display1 = new Display(cards)

newFlip.addEventListener('click', () => {
      dialog.showModal()
});
//     // Form cancel button closes the dialog box
cancel.addEventListener('click', () => {
      dialog.close();
});
  
accept.addEventListener('click', () => {
      const task = new Task(titleInput.value)
      display1.add(task)
})





// const newFlip = document.querySelector('#newFlip')
// let i = 0;

// 

// display1.update()

// const testTask = new Task('testTask','no notes','work', 3,'not checked')
//     
//     console.log(display1.targetList)

