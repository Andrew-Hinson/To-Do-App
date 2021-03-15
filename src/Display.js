import { cardCreation } from './cardCreation.js';
export class Display {


    constructor (element){

        this.targetElement = element;

        this.targetList = []

        this.storage = []

        this.counter = 0;
    }
    //makes element of my choice appends to what is selected in index.js(or wherever I am selecting)//
    // creates div card elements
    static createTargetItem(item){
        return cardCreation(item)
    }


    
    update() {
       
        // remove all existing content from container
        while(this.targetElement.firstChild) {
                this.targetElement.removeChild(this.targetElement.firstChild)
        }

        // if(this.targetList.length === 0){
        //     for(const item of this.storage){
        //         this.targetElement.appendChild(Display.createTargetItem(item))
        //         this.updateLocalStorage(item)
        //     }
        // } else {
            for(const item of this.targetList ){
                
                this.targetElement.appendChild(Display.createTargetItem(item))
                this.updateLocalStorage(item)
            }
        }
            
    

    //read from targetList and then push to localStorage
    //THEN if nothing in targetList, populate targetList with whats in localStorage and then update

    statUpdate(){
        while(this.targetElement.firstChild) {

            this.targetElement.removeChild(this.targetElement.firstChild)

        }
        //lacks createTargetItem to avoid making generic card
        for(const item of this.targetList){
            this.targetElement.appendChild(item)
            
        }
    }

    
    
    updateLocalStorage(item){
        localStorage.setItem(item.category, JSON.stringify(this.targetList))
        localStorage.setItem(`counter${item.category}`, JSON.stringify(this.counter))
    }

    add (item) {
        this.targetList.push(item)
        this.update();
    }

    statAdd(item){
        this.targetList.push(item)
        this.statUpdate();
    }
   
    
    //removes based on index of item
    remove(id){
        
        let indexToRemove = this.targetList.findIndex((item) => item.id === id)
        this.targetList.splice(indexToRemove, 1)
        this.update();
    }

    find (id) {

        let indexOfTask = this.targetList.findIndex((item) => item.id === id)
        return indexOfTask;

    }
}



