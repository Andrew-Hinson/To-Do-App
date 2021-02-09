import { Task, taskData } from "./dataHandle.js"

const appendToFront = () => {
    const flipCardFront = document.querySelector('.flip-card-front')
    const lastIndex = taskData.tasks.length - 1;
    const newTask = document.createElement('div')
    const taskTitle = document.createElement('p')
    const checkLabel = document.createElement('label')
    const checkBox = document.createElement('input')
    
    let taskObject = taskData.tasks[lastIndex]

    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', 'checkbox')
    checkLabel.setAttribute('for', 'checkbox')
    newTask.classList.add('todo')


    taskTitle.innerText = `${taskObject.title}`

    checkLabel.innerText = 'Complete'

    newTask.appendChild(taskTitle)
    checkLabel.appendChild(checkBox)
    newTask.appendChild(checkLabel)
   
    
    flipCardFront.appendChild(newTask)
    return flipCardFront
}
export { appendToFront }