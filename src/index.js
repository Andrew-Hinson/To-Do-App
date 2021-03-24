// eslint-disable-next-line no-undef
const Chart = require('chart.js');


import './style.css';
import { landing } from './landingModule.js';
import { Display } from './Display.js';
import { Task } from './Tasks.js';
import { pieChart, graphChart }from './statCards.js';

//initial page generation
landing()


const categoryTitle = document.querySelector('#categoryTitle')
//main element that Display class needs to access
const cards = document.querySelector('.cards')

//classes that tasks will be assigned to//
const workDisplay = new Display(cards)
const choresDisplay = new Display(cards)
const personalDisplay = new Display(cards)
const studyDisplay = new Display(cards)
const homeDisplay = new Display(cards)
//DOM chart appending to Home screen//



for(const key in localStorage){
      if(key === '0'){
            workDisplay.getLocalStorage(key)
            workDisplay.update()
      }
      if(key === '1'){
            choresDisplay.getLocalStorage(key)
            choresDisplay.update()
      }
      if(key === '2'){
            personalDisplay.getLocalStorage(key)
            personalDisplay.update()
      }
      if(key === '3'){
            studyDisplay.getLocalStorage(key)
            studyDisplay.update()
      }
}

// if(0 in localStorage|| 1 in localStorage|| 2 in localStorage|| 3 in localStorage){
      
// } 
homeDisplay.statAdd(pieChart())
homeDisplay.statAdd(graphChart())




///homepage charts //////
const canvas1 = document.querySelector('#canvas1')
const canvas2 = document.querySelector('#canvas2')
Chart.defaults.global.defaultFontColor = '#f5f5f5'
const chart = new Chart(canvas1, {
      type: 'pie',
      data: {
        labels: ["Work", "Chores", "Personal", "Study"],
        datasets: [{
          label: "ToDo's",
          backgroundColor: ["#f47c7c", "#f7f48b","#a1de93","#70a1d7"],
          data: []
        }]
      },
      options: {
        title: {
          display: true,
          text: "Your ToDo's",
          fontSize: 25,
        },
        responsive: false,
        maintainAspectRatio: true
      }
  });
  const barChart = new Chart(canvas2, {
      type: 'bar',
      data: {
        labels: ["Work", "Chores", "Personal", "Study"],
        datasets: [{
            beginAtZero: true,
            backgroundColor: ["#f47c7c", "#f7f48b","#a1de93","#70a1d7"],
            data: []
        }]
      },
      options: {
        title: {
          display: true,
          text: "Completed ToDo's",
          fontSize: 25,
        },
        lineHeight: 2,
        scales: {
            yAxes: [{
                ticks: {
                    max: 10,
                    min: 0,
                    stepSize: 1,
                    lineHeight: 1.7
                }
            }]
        },
        legend: {
              display: false
        },
        responsive: false,
        maintainAspectRatio: true
      }
  });


  const updateChart = () => {
      let workChart = workDisplay.targetList.length
      let choresChart = choresDisplay.targetList.length
      let personalChart = personalDisplay.targetList.length
      let studyChart = studyDisplay.targetList.length

      chart.data.datasets[0].data = [workChart, choresChart, personalChart, studyChart]
      chart.update();
}

////////////////////////
const updateCompletedChart = () => {
      let workChart = workDisplay.completed
      let choresChart = choresDisplay.completed
      let personalChart = personalDisplay.completed
      let studyChart = studyDisplay.completed

      barChart.data.datasets[0].data = [workChart, choresChart, personalChart, studyChart]
      barChart.update()
}

updateChart()
updateCompletedChart()

const reset = document.querySelector('#reset')

reset.addEventListener('click', (e) => {
      e.stopPropagation()
      window.localStorage.clear()
      location.reload()
})

// eslint-disable-next-line no-unused-vars
const dialogControl = (() => {
      //Dialog control Listeners
      
      const cancel = document.querySelector('#cancel');
      const accept = document.querySelector('#accept')
      const createNew = document.querySelector('#CreateNew')
      const dialog = document.querySelector('#dialog');

      cancel.addEventListener('click', (e) => {
            e.preventDefault()
            categoryTitle.innerText = 'Home'
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



// eslint-disable-next-line no-unused-vars
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
                            
                  } else if(target.value === 4){
                        categoryTitle.innerText = target.id
                        
                        homeDisplay.statUpdate()
                        
                        updateChart()
                        updateCompletedChart()
                  }
           });
     }
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
      
      let id;

      if(categoryDisplay === '0'){
            id =  `id${workDisplay.identifier}`
      }
      if(categoryDisplay === '1'){
            id =  `id${choresDisplay.identifier}`
      }
      if(categoryDisplay === '2'){
            id =  `id${personalDisplay.identifier}`
      }
      if(categoryDisplay === '3'){
            id =  `id${studyDisplay.identifier}`
      }
      
      
      const task = new Task(titleInput.value, notesInput.value, categoryDisplay, radioValue, id)
      
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

const cardListener = document.querySelector('.cards')

cardListener.addEventListener('click', (e) => {
      
      let target = e.target;

      if(target.classList.contains('save')){
            //currentCategory
            let y = target.dataset.category;
            //currentPosition
            let x = target.dataset.id
            // a is = {item} in this.targetlist
            let a;

            if(y === '0'){
                  a = workDisplay.find(x)
            } else if (y === '1'){
                  a = choresDisplay.find(x)
            } else if (y === '2'){
                  a = personalDisplay.find(x)
            } else if (y === '3'){
                  a = studyDisplay.find(x)
            }

            let cardNote = document.querySelector(`#cardNote${x}`)

            let frontColor = document.querySelector(`#frontCheck${x}`)

            const radioInputs = document.querySelectorAll(`.cardRadio${x}`)

            
            //radioValue will hold the value of the currently clicked radio button
            let radioValue;
           //iterates through what is checked or not, to then UPDATE the object with radioValue
            for(let radio of radioInputs){
                  if(radio.checked === true){
                        radioValue = radio.value
                  }
            }
            
            //if category = categorynum, get specific task with tasks position of y, drill down to priority and set
            if(y === '0'){
                  
                  workDisplay.targetList[a].priority = radioValue;
                  workDisplay.targetList[a].notes = cardNote.value;
                  workDisplay.setItem(y)
            }
            if(y === '1'){
                  choresDisplay.targetList[a].priority = radioValue;
                  choresDisplay.targetList[a].notes = cardNote.value;
                  choresDisplay.setItem(y)
            }
            if(y === '2'){
                  personalDisplay.targetList[a].priority = radioValue;
                  personalDisplay.targetList[a].notes = cardNote.value;
                  personalDisplay.setItem(y)
            }
            if(y === '3'){
                  
                  studyDisplay.targetList[a].priority = radioValue;
                  studyDisplay.targetList[a].notes = cardNote.value;
                  studyDisplay.setItem(y)
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
            let y = target.dataset.category
            let x = target.dataset.id
            
            //to use when transitioning to figure out which element to remove
            let currentCard = document.querySelector(`#cardParent${x}`)
            
            
            currentCard.classList.add("removed")
      
            if(currentCard.classList.contains('removed')){
                  setTimeout(() => {
                        
                        if( y === '0'){
                              workDisplay.remove(x, y)
                              workDisplay.update()
                        }
                        if( y === '1'){
                              choresDisplay.remove(x, y)
                              choresDisplay.update()
                        }
                        if (y === '2'){
                              personalDisplay.remove(x, y)
                              personalDisplay.update()
                        }
                        if (y === '3'){
                              studyDisplay.remove(x, y)
                              studyDisplay.update()
                        }
                  }, 1000);
            }
            
      }
      else if(target.classList.contains('complete')){
            let y = target.dataset.category
            let x = target.dataset.id
            //to use when transitioning to figure out which element to remove
            let currentCard = document.querySelector(`#cardParent${x}`)

            currentCard.classList.add("removed")
            
            if(currentCard.classList.contains('removed')){
                  setTimeout(() => {
                        
                        if( y === '0'){
                              ++workDisplay.completed
                              workDisplay.remove(x, y)
                              workDisplay.update()
                        }
                        if( y === '1'){
                              ++choresDisplay.completed
                              choresDisplay.remove(x, y)
                              choresDisplay.update()
                        }
                        if (y === '2'){
                              ++personalDisplay.completed
                              personalDisplay.remove(x, y)
                              personalDisplay.update()
                        }
                        if (y === '3'){
                              ++studyDisplay.completed
                              studyDisplay.remove(x, y)
                              studyDisplay.update()
                        }
                  }, 1000);
            }
      }
      
});

