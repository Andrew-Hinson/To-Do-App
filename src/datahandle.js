class Task {
    constructor(title, priority, notes, checked){
        this.title = title;
        this.notes = notes;
        this.priority = priority;
        this.checked = checked;
    }

}
const taskData = {
    tasks: [],
    category: {},
}


export { Task, taskData }