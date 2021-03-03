import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';
import {workContainer, personalContainer, studyContainer, choresContainer} from './containers.js';
import { dialog } from './dialog';
import { checkBoxes } from './dropDowns';


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


//classes that tasks will be assigned to//
const workDisplay = new Display(cards)
const choresDisplay = new Display(cards)
const personalDisplay = new Display(cards)
const studyDisplay = new Display(cards)
////////////////////////////////////////




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
 
//used in position of Task within Display targetList
const displayCounter = {

      work:       0,
      chores:     0,
      personal:   0,
      study:      0

};

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
      };

      let position;
      if(categoryDisplay === '0'){
            position = displayCounter.work;
            displayCounter.work++
      }
      if(categoryDisplay === '1'){
            position = displayCounter.chores;
            displayCounter.chores++
      }
      if(categoryDisplay === '2'){
            position = displayCounter.personal;
      }
      if(categoryDisplay === '3'){
            position = displayCounter.study;
            displayCounter.study++
      }

      
      const task = new Task(titleInput.value, notesInput.value, categoryDisplay, radioValue, position)
      
      if(categoryDisplay === '0'){

            workDisplay.add(task)
            categoryTitle.innerText = 'Work';

      } else if(categoryDisplay === '1'){

            choresDisplay.add(task)
            categoryTitle.innerText = 'Chores';


      } else if(categoryDisplay === '2'){

            personalDisplay.add(task)
            categoryTitle.innerText = 'Personal'

      } else if(categoryDisplay === '3'){

            studyDisplay.add(task)
            categoryTitle.innerText = 'Study'

      }
      
     
      titleInput.value = '';
      notesInput.value = '';
      
};
//0 = work
//1 = chores
//2 = personal
//3 = study
//target.dataset.category
//Edit card details
const cardListener = document.querySelector('.cards')

cardListener.addEventListener('click', (e) => {
      console.log(e)
      let target = e.target;
      if(target.classList.contains('save')){
            //submit changes to Task class
            let currentCategory = target.dataset.category;
            let currentPosition = target.dataset.position;
            
            
      }
      if(target.classList.contains('delete')){
            //delete card
      }
      if(target.classList.contains('complete')){
            //either remove or highlight card as completed
      }
})

