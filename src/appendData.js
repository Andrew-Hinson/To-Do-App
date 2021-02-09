import { Task, taskData } from "./dataHandle.js"

const appendToFront = () => {
    const flipCardFront = document.querySelector('.flip-card-front')
    const lastIndex = taskData.tasks.length - 1;
    const newTask = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const checkBox = document.createElement('checkbox')
    
    let taskObject = taskData.tasks[lastIndex]

    newTask.classList.add('todo')
    taskTitle.innerText = `${taskObject.title}`
    newTask.appendChild(taskTitle)
    newTask.appendChild(checkBox)
    
    flipCardFront.appendChild(newTask)
    return flipCardFront
}
export { appendToFront }