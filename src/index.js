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
const categoryTitle = document.querySelector('#categoryTitle')
//main element that Display class needs to access
const mainContainer = document.querySelector('#mainContainer')
const cards = document.querySelector('.cards')

//classes that tasks will be assigned to
const workDisplay = new Display(cards)
const choresDisplay = new Display(cards)
const personalDisplay = new Display(cards)
const studyDisplay = new Display(cards)





const dialogControl = (() => {
      //Dialog control Listeners
      const cancel = document.querySelector('#cancel');
      const accept = document.querySelector('#accept')
      const createNew = document.querySelector('#CreateNew')
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
            submitForm()
            dialog.close();
      })

})();



const switchDisplay = (() => {
      //menu options on the left all have class of .newFlip
      const menuOptions = document.querySelectorAll('.newFlip')
      //figure out what was clicked, change Display accordingly
      let target;
      for(const option of menuOptions){
            option.addEventListener('click', (e) => {
                  target = e.target
                  
                  if(target.value === 0){
                        categoryTitle.innerText = target.id
                        workDisplay.update()
                        
                  } else if(target.value === 1){
                        categoryTitle.innerText = target.id
                        choresDisplay.update()
                        
                  } else if(target.value === 2){
                        categoryTitle.innerText = target.id
                        personalDisplay.update()
                        
                  } else if(target.value === 3){
                        categoryTitle.innerText = target.id
                        studyDisplay.update()
                  }
           });
     };
})();
 



//when accept is pressed, it should place the card in the selected category
const submitForm = () => {
      const titleInput = document.querySelector('#titleInput')
      const notesInput = document.querySelector('#notesInput')      
      //Category select to determine which Display Class to use and put Task in
      const categoryDisplay = document.querySelector('#collection').value
      //radio selection to determine priority
      const radioInputs = document.getElementsByTagName('input')
      //assigned a number 1-3 green - red, loops over title input as well but not a factor
      let radioValue; 
      for(let radio of radioInputs){
            if(radio.checked === true){
                  radioValue = radio.value
            }
      }
      
      const task = new Task(titleInput.value, notesInput.value, categoryDisplay, radioValue)
      
      if(categoryDisplay === '0'){
            workDisplay.add(task)
            categoryTitle.innerText = 'Work';
            console.log(workDisplay)
      } else if(categoryDisplay === '1'){
            choresDisplay.add(task)
            categoryTitle.innerText = 'Chores';
            console.log(choresDisplay)
      } else if(categoryDisplay === '2'){
            personalDisplay.add(task)
            categoryTitle.innerText = 'Personal'
            console.log(personalDisplay)
      } else if(categoryDisplay === '3'){
            studyDisplay.add(task)
            categoryTitle.innerText = 'Study'
            console.log(studyDisplay)
      }

      titleInput.value = '';
      notesInput.value = '';
      
};


    
const body = document.querySelector('body').addEventListener('click', (e) => {
      console.log(e)
})