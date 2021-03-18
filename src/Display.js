import { cardCreation } from './cardCreation.js';
export class Display {


    constructor (element){

        this.targetElement = element;

        this.targetList = []

        this.storage = []

        this.completed = 0;

        this.identifier = 0; 
        //identifier incriments and is saved by localstorage to prevent duplicate IDs even with page reloads
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

        
        for(const item of this.targetList ){
            this.targetElement.appendChild(Display.createTargetItem(item))
        }
    }
            
    remove(id, category){ 
        let indexToRemove = this.targetList.findIndex((item) => item.id === id)
        this.targetList.splice(indexToRemove, 1)
        this.removeLocalStorage(category)
    }


    //used in saving states in cards, returns the correct {item} in this.targetList for editing purposes.
    find (id) {
        let indexOfItem = this.targetList.findIndex((item) => item.id === id)
        return indexOfItem;
    }

    //setLocalStorage and removeLocalStorage snapshot the current state of variables and send them to localstorage
    //removeLocalStorage used in  remove(id,category) is not able to pass in full {item}, unable to drill down into it
    //may not be most elegent solution but it werks
    removeLocalStorage(category){
        localStorage.setItem(`${category}`, JSON.stringify(this.targetList))
        localStorage.setItem(`completed${category}`, JSON.stringify(this.completed))
        localStorage.setItem(`id${category}`, JSON.stringify(this.identifier))   
    }

    setLocalStorage(item){
        localStorage.setItem(item.category, JSON.stringify(this.targetList))
        localStorage.setItem(`completed${item.category}`, JSON.stringify(this.completed))
        localStorage.setItem(`id${item.category}`, JSON.stringify(this.identifier))   
    }
    setItem(category){
        localStorage.setItem(`${category}`, JSON.stringify(this.targetList))
    }
    //read FROM local storage 
    //used in the beginning of index.js to see if local storage exists
    getLocalStorage(key){
        this.targetList = JSON.parse(localStorage.getItem(key))
        this.completed = JSON.parse(localStorage.getItem(`completed${key}`))
        this.identifier = JSON.parse(localStorage.getItem(`id${key}`))
    }

    
    // removeFromLocalStorage(){

    // }
        
    add(item) {
        ++this.identifier
        this.targetList.push(item)
        this.setLocalStorage(item)
        this.update()
    }
 

    statUpdate(){
        while(this.targetElement.firstChild) {

            this.targetElement.removeChild(this.targetElement.firstChild)

        }
        //lacks createTargetItem to avoid making generic card
        for(const item of this.targetList){
            this.targetElement.appendChild(item)
            
        }
    }
    statAdd(item){
        this.targetList.push(item)
        this.statUpdate();
    }

}



