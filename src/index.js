import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';
import { dialog } from './dialog.js';
import { checkBoxes } from './dropDowns.js';
import { stats } from './statCards.js'

landing()
//home page fill 

const categoryTitle = document.querySelector('#categoryTitle')
//main element that Display class needs to access
const mainContainer = document.querySelector('#mainContainer')
const cards = document.querySelector('.cards')


//classes that tasks will be assigned to//
const workDisplay = new Display(cards)
const choresDisplay = new Display(cards)
const personalDisplay = new Display(cards)
const studyDisplay = new Display(cards)
const homeDisplay = new Display(cards)
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
                  console.log(target)
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
                            
                  } else if(target.value === 4){
                        categoryTitle.innerText = target.id
                        homeDisplay.update()
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
            displayCounter.personal++
      }
      if(categoryDisplay === '3'){
            position = displayCounter.study;
            displayCounter.study++
      }
      let id = `id${position}`
      
      const task = new Task(titleInput.value, notesInput.value, categoryDisplay, radioValue, position, id)
      
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
      console.log(task)
     
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
      
      let target = e.target;
      let a;
      if(target.classList.contains('save')){
            //currentCategory
            let x = target.dataset.category;
            //currentPosition
            let z = target.dataset.id
            //rewrite to have the selection of the ID instead of the position
            let y;
            if(x === '0'){
                  y = workDisplay.find(z)
            } else if (x === '1'){
                  y = choresDisplay.find(z)
            } else if (x === '2'){
                  y = personalDisplay.find(z)
            } else if (x === '3'){
                  y = personalDisplay.find(z)
            }

            let cardNote = document.querySelector(`#cardNote${z}`)

            let frontColor = document.querySelector(`#frontCheck${z}`)

            const radioInputs = document.querySelectorAll(`.cardRadio${z}`)

            
            //radioValue will hold the value of the currently clicked radio button
            let radioValue;
           //iterates through what is checked or not, to then UPDATE the object with radioValue
            for(let radio of radioInputs){
                  if(radio.checked === true){
                        radioValue = radio.value
                  }
            }
            console.log(z)
            console.log(y)
            //if category = categorynum, get specific task with tasks position of y, drill down to priority and set
            if(x === '0'){
                  workDisplay.targetList[y].priority = radioValue;
                  workDisplay.targetList[y].notes = cardNote.value;
            }
            if(x === '1'){
                  choresDisplay.targetList[y].priority = radioValue;
                  choresDisplay.targetList[y].notes = cardNote.value;
            }
            if(x === '2'){
                  personalDisplay.targetList[y].priority = radioValue;
                  personalDisplay.targetList[y].notes = cardNote.value;
            }
            if(x === '3'){
                  studyDisplay.targetList[y].priority = radioValue;
                  studyDisplay.targetList[y].notes = cardNote.value;
            }

            if(radioValue === '1'){
                  frontColor.classList.remove('yellow','red')
                  frontColor.classList.add('green')
            } else if(radioValue === '2'){
                  frontColor.classList.remove('green','red')
                  frontColor.classList.add('yellow')
            } else if(radioValue === '3'){
                  frontColor.classList.remove('green','yellow')
                  frontColor.classList.add('red')
            }
      }   
      
            //delete card
      else if(target.classList.contains('delete')){
            let x = target.dataset.category
            let y = target.dataset.id
            a = y //to use when transitioning to figure out which element to remove
            let currentCard = document.querySelector(`#cardParent${y}`)

            currentCard.classList.add("removed")
      
            if(currentCard.classList.contains('removed')){
                  setTimeout(() => {
                        
                        if( x === '0'){
                              workDisplay.remove(a)
                        }
                        if( x === '1'){
                              choresDisplay.remove(a)
                        }
                        if (x === '2'){
                              personalDisplay.remove(a)
                        }
                        if (x === '3'){
                              studyDisplay.remove(a)
                        }
                  }, 1000);
            }
      }
});
            
homeDisplay.statAdd(stats())

