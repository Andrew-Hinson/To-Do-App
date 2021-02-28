import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';
import {workContainer, personalContainer, studyContainer, choresContainer} from './containers.js';
import { dialog } from './dialog';


landing()
//home page fill 
const landingInfo = () => {
      const infoPanelParent = document.createElement('div')
      infoPanelParent.setAttribute('id', 'infoPanelParent')

      const infoContent = document.createElement('div')
      infoContent.setAttribute('id', 'infoContent')

      const infoContentP = document.createElement('p')
      infoContentP.innerText = "Welcome to Task-Flip! Click on Menu to choose a category to add a new Task to! Choose 'Home' from menu to come back to this page for a full stat breakdown. Each Category will keep their own Tasks seperate, but you can see detailed statistics on all categories from here if you wish. Thank you for looking at my project!"

}

//Dialog control Listeners
const cancel = document.querySelector('#cancel');
const accept = document.querySelector('#accept')
const createNew = document.querySelector('#CreateNew')
//main element that Display class needs to access
const mainContainer = document.querySelector('#mainContainer')
const cards = document.querySelector('.cards')

//inputs when creating a Task//
const titleInput = document.querySelector('#titleInput')
const notesInput = document.querySelector('#notesInput')

//value of the selected category to put the task inside
let categoryDisplay; 

//detects the option clicked and updates categoryDisplay for accept event listener
const dialogControl = (() => {
      const dialog = document.querySelector('#dialog');

      cancel.addEventListener('click', (e) => {
            e.preventDefault()
            dialog.close();
      });

      createNew.addEventListener('click', (e) => {
            e.preventDefault()
            dialog.showModal();
      })

      accept.addEventListener('click', (e) => {
            e.preventDefault()
            dialog.close();
      })

})();


// const dialogControl = (() => {
//      let target;
     
//      const dialog = document.querySelector('#dialog');
//      let h2Span = document.querySelector('#dialogH2Span')
//      let catTitle = document.querySelector('#categoryTitle')
//         // Form cancel button closes the dialog box
//      cancel.addEventListener('click', (e) => {
//            e.preventDefault()
//            dialog.close();
//      });
//      //clicking menu option opens dialog
//      const menuOptions = document.querySelectorAll('.newFlip')
//            for(const option of menuOptions){
                 
//                  option.addEventListener('click', (e) => {
//                        target = e.target
//                        categoryDisplay = `${target.value}` //maincontrol of which category we are in
//                        h2Span.innerText = `${target.id}`
//                        h2Span.setAttribute('value', `${target.value}`)
//                        catTitle.innerText = `${target.id}`
                       
//                        dialog.show()
//                  });
//            };
// })();
 
//classes that tasks will be assigned to
const workDisplay = new Display(cards)
const choresDisplay = new Display(cards)
const studyDisplay = new Display(cards)
const personalDisplay = new Display(cards)


// when button is clicked for accept, create new task and push to class Display
//when accept is pressed, it should place the card in the selected category
// accept.addEventListener('click', (e) => {
//       e.preventDefault()
//       //radio selection to determine priority
//       const radioInputs = document.getElementsByTagName('input')
//             //can use this to figure out which Display Class to use
//       let radioValue; //assigned a number 1-3 green - red, loops over title input as well but not a factor
//       for(let radio of radioInputs){
//             if(radio.checked === true){
//                   radioValue = radio.value
//             }
//       }
//       const task = new Task(titleInput.value, notesInput.value, radioValue)
      
//       if(categoryDisplay === '0'){
//             workDisplay.add(task)
//             console.log(workDisplay)
//       } else if(categoryDisplay === '1'){
//             choresDisplay.add(task)
//             console.log(choresDisplay)
//       } else if(categoryDisplay === '2'){
//             personalDisplay.add(task)
//             console.log(personalDisplay)
//       } else if(categoryDisplay === '3'){
//             studyDisplay.add(task)
//             console.log(studyDisplay)
//       }

//       titleInput.value = '';
//       notesInput.value = '';
//       dialog.close()
// });


    
