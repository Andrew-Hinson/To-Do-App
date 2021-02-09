const taskDomCreation = (i) => {
   
    const newTask = document.createElement('div')
    const taskTitle = document.createElement('h3')
    const checkBox = document.createElement('checkbox')
    newTask.dataset.i = i
    checkBox.dataset.i = i
    newTask.classList.add('.todo')
    newTask.appendChild(taskTitle)
    newTask.appendChild(checkBox)
    return newTask;
}

export { taskDomCreation }