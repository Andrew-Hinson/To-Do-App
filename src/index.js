import './style.css';
import Todo from './creation';
import { landing } from './landingModule.js';
import { setPic } from './pic.js'



const content = document.querySelector('#content');
content.appendChild(setPic())
content.appendChild(landing())