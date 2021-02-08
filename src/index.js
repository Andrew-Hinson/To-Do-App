import './style.css';
import { landing } from './landingModule.js';
import { buttonEvent } from './bottombtns.js';

const content = document.querySelector('#content');

content.appendChild(landing())
buttonEvent()