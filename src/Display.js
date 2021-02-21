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
        const lastIndex = this.targetList.length - 1;
        // remove all existing content from container
        while(this.targetElement.firstChild) {
                this.targetElement.removeChild(this.targetElement.firstChild)
        }
            // map over targetList Array, Create new element and append
        
        for(const item of this.targetList){
            console.log(lastIndex)
            console.log(item)
            this.targetElement.appendChild(Display.createTargetItem(item))
        }
            
    }

    //calls update after pushing items to targetList array//
    add (item) {
        this.targetList.push(item)
        this.update();
    }
    //removes based on index of item
    remove(index){
        this.targetList.splice(index, 1)
        this.update();
    }
}



