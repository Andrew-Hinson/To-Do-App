import { cardCreation } from './cardCreation.js';
export class Display {
    constructor (element){
        this.targetElement = element;

        this.targetList = []
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
            // map over targetList Array, Create new element and append
        
        for(const item of this.targetList){
            
            this.targetElement.appendChild(Display.createTargetItem(item))

        }
            
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
    //calls update after pushing items to targetList array//
    add (item) {
        this.targetList.push(item)
        this.update();
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



