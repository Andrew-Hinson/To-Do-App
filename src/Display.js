export class Display {
    constructor (element){
        this.targetElement = element;

        this.targetList = []
    }
    //makes element of my choice//
    static createTargetItem(text){
        const div = document.createElement('div')

        div.innerText = text
        div.classList.add('card')

        return div;
    }
    
    update() {
        // remove all existing content from container
        while(this.targetElement.firstChild) {
                this.targetElement.removeChild(this.targetElement.firstChild)
        }
            // map over targetList Array, Create new element and append
        for(const text of this.targetList){
            this.targetElement.appendChild(Display.createTargetItem(text))
        }
    }
    //calls update after pushing items to targetList array//
    add (text) {
        this.targetList.push(text)
        this.update();
    }
    remove(index){
        this.targetList.splice(index, 1)
        this.update();
    }
}



