import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';



landing()

const landingInfo = () => {
      const infoPanelParent = document.createElement('div')
      infoPanelParent.setAttribute('id', 'infoPanelParent')

      const infoContent = document.createElement('div')
      infoContent.setAttribute('id', 'infoContent')

      const infoContentP = document.createElement('p')
      infoContentP.innerText = "Welcome to Task-Flip! Click on Menu to choose a category to add a new Task to! Choose 'Home' from menu to come back to this page for a full stat breakdown. Each Category will keep their own Tasks seperate, but you can see detailed statistics on all categories from here if you wish. Thank you for looking at my project!"

}















//Event listener query's
const cancel = document.querySelector('#cancel');

// const cancel = document.querySelector('#cancel');
const dialog = document.querySelector('#dialog');

const cards = document.querySelector('.cards')
const accept = document.querySelector('#accept')

//inputs when creating a Task//
const titleInput = document.querySelector('#titleInput')
const notesInput = document.querySelector('#notesInput')
const collectionInput = document.querySelector('#collection')



// when button is clicked for accept, create new task and push to class Display
const workDisplay = new Display(cards)
const studyDisplay = new Display(cards)
const personalDisplay = new Display(cards)
const choresDisplay = new Display(cards)




//opens dialog, IIFE, generates an error but still works!??
const dialogControl = (() => {
      const menuOptions = document.querySelectorAll('.newFlip')
      for(const option of menuOptions){
      option.addEventListener('click', () => dialog.showModal())    
      }
         // Form cancel button closes the dialog box
      cancel.addEventListener('click', () => {
            dialog.close();
      });
      accept.addEventListener('click', () => {
            dialog.close()
      });
})();


//when accept is pressed, it should place the card in the selected category
accept.addEventListener('click', (e) => {
      e.preventDefault()
      //radio selection to determine priority
      const radioInputs = document.getElementsByTagName('input')
      let radioValue; //assigned a number 1-3 green - red, loops over title input as well but not a factor
      for(let radio of radioInputs){
            if(radio.checked === true){
                  radioValue = radio.value
            }
      }
      const task = new Task(titleInput.value, notesInput.value, radioValue)
      titleInput.value = '';
      notesInput.value = '';
      dialog.close();
})



// const newFlip = document.querySelector('#newFlip')
// let i = 0;

// const body = document.querySelector('body')
// body.addEventListener('click', (e)=> {
//       const target = e.target
//       let radioValue;
//       if(target.checked === true){
//             radioValue = target.id;
//       }
// })

// display1.update()


    

