import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';



landing()


const cancel = document.querySelector('#cancel');
const newFlip = document.querySelector('#newFlip');
// const cancel = document.querySelector('#cancel');
const dialog = document.querySelector('#dialog');

newFlip.addEventListener('click', ()=> {
      dialog.showModal()
});
//     // Form cancel button closes the dialog box
cancel.addEventListener('click', function() {
      dialog.close();
});
  



// const cards = document.querySelector('.cards')

// const newFlip = document.querySelector('#newFlip')
// let i = 0;

// const display1 = new Display(cards)

// display1.update()

// const testTask = new Task('testTask','no notes','work', 3,'not checked')
//     display1.add(testTask)
//     console.log(display1.targetList)

