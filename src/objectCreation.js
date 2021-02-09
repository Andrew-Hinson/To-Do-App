import { Task , taskData } from './dataHandle.js';
const flipForm = document.querySelector('#flipForm')

const createTask = () => {
    const task = new Task (
        flipForm.elements.title.value,
        flipForm.elements.priority.value,
        flipForm.elements.notes.value,
        
    )
    taskData.tasks.push(task)
}

export { createTask }