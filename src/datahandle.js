class Task {
    constructor(title, notes, collection, priority){
        this.title = title;
        this.notes = notes;
        this.priority = priority;
        this.col = priority;
        this.checked = checked;
    }

    update() {
        //remove any text in the fields clear selections//
        
    }
}
const taskData = {
    tasks: [],
    category: {},
}



export { Task }