export default class Todo {
    //sets up object
    constructor (title, description, checkbox) {
        this.title = title;
        this.description = description;
        this.checkbox = checkbox;
    }
    readOut () {
        console.log(`Your new ToDo: ${this.title} has been added`)
    }
}

