

export class Display {
    constructor (element){
        this.card = element;

        this.cardList = []
    }
    update() {
        // remove all existing content from container
        while(this.card.firstChild) {
            this.card.removeChild(this.card.firstChild)
        }
    }
}



