import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';

landing()


const cards = document.querySelector('.cards')


const display1 = new Display(cards)
const testTask = new Task('testTask','no notes','work', 3,'not checked')
display1.add(testTask)
console.log(display1.targetList)