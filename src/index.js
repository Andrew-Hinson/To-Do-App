import './style.css';
import Todo from './creation';
import { landing } from './landingModule.js';

const content = document.querySelector('#content');

content.appendChild(landing())