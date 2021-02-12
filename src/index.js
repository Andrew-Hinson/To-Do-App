import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js'

const content = document.querySelector('#content');

content.appendChild(landing())


const cards = document.querySelector('.cards')

const display = new Display(cards)

display.add('card')




