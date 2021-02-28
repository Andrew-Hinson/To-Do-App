import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';
import {workContainer, personalContainer, studyContainer, choresContainer} from './containers.js';


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
const accept = document.querySelector('#accept')



const cards = document.querySelector('.cards')


//inputs when creating a Task//
const titleInput = document.querySelector('#titleInput')
const notesInput = document.querySelector('#notesInput')


//container querys




//value of the selected category to put the task inside
let categoryDisplay; 


const dialogControl = (() => {
     let target;
     
     const dialog = document.querySelector('#dialog');
     let h2Span = document.querySelector('#dialogH2Span')
     let catTitle = document.querySelector('#categoryTitle')
        // Form cancel button closes the dialog box
     cancel.addEventListener('click', (e) => {
           e.preventDefault()
           dialog.close();
     });
     //clicking menu option opens dialog
     const menuOptions = document.querySelectorAll('.newFlip')
           for(const option of menuOptions){
                 
                 option.addEventListener('click', (e) => {
                       target = e.target
                       categoryDisplay = `${target.value}` //maincontrol of which category we are in
                       h2Span.innerText = `${target.id}`
                       h2Span.setAttribute('value', `${target.value}`)
                       catTitle.innerText = `${target.id}`
                       
                       dialog.show()
                 });
           };
})();
 

const workDisplay = new Display(cards)
const choresDisplay = new Display(cards)
const studyDisplay = new Display(cards)
const personalDisplay = new Display(cards)


// when button is clicked for accept, create new task and push to class Display
//when accept is pressed, it should place the card in the selected category
accept.addEventListener('click', (e) => {
      e.preventDefault()
      //radio selection to determine priority
      const radioInputs = document.getElementsByTagName('input')
            //can use this to figure out which Display Class to use
      let radioValue; //assigned a number 1-3 green - red, loops over title input as well but not a factor
      for(let radio of radioInputs){
            if(radio.checked === true){
                  radioValue = radio.value
            }
      }
      const task = new Task(titleInput.value, notesInput.value, radioValue)
      
      if(categoryDisplay === '0'){
            workDisplay.add(task)
      } else if(categoryDisplay === '1'){
            choresDisplay.add(task)
      } else if(categoryDisplay === '2'){
            personalDisplay.add(task)
      } else if(categoryDisplay === '3'){
            studyDisplay.add(task)
      }

      titleInput.value = '';
      notesInput.value = '';
      dialog.close()
});


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


    
