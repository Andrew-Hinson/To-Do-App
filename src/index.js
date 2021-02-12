import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js'

landing()




const cards = document.querySelector('.cards')

const display = new Display(cards)

const display2 = new Display(cards)

display2.add('task1')
display2.add('task2')
// display.add('card')
// display.add('trash')
// display.add('billy')

// display.remove(1)