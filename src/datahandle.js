class Task {
    constructor(title, priority, notes, checked){
        this.title = title;
        this.priority = priority;
        this.notes = notes;
        this.checked = checked;
    }

}
const taskData = {
    tasks: [],
    category: {},
}


export { Task, taskData }