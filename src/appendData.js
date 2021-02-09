import { Task, taskData } from "./dataHandle.js"

const appendToFront = () => {
    const flipCardFront = document.querySelector('.flip-card-front')
    const lastIndex = taskData.tasks.length - 1;
    const newTask = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const checkBox = document.createElement('checkbox')
    
    newTask.classList.add('todo')
    taskTitle.innerText = `Task: ${lastIndex.title}`
    newTask.appendChild(taskTitle)
    newTask.appendChild(checkBox)
    
    flipCardFront.appendChild(newTask)
    return flipCardFront
}
export { appendToFront }