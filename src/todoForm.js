const createForm = () => {
    const formDiv = document.createElement('div')
        formDiv.setAttribute('id', 'formDiv');
    const form = document.createElement('form')
        form.setAttribute('id', 'form');
    
    
    const createList = () => {
        const ul = document.createElement('ul')
        const liTitle = () => {
            const li = document.createElement('li')
            const title = document.createElement('p')
                title.setAttribute('id', 'title')
                title.innerText = 'Task'
                const titleInput = () => {
                    const input = document.createElement('input')
                    input.setAttribute('type', 'text')
                    input.setAttribute('id', 'task')
                    return input
                }
            li.appendChild(title)
            li.appendChild(titleInput())
            return li;
        }
        const liCollection = () => {
            const li = document.createElement('li')
            const aTag = document.createElement('a')
            aTag.innerText = 'Collection'
            aTag.setAttribute('id', 'collection')
            aTag.setAttribute('href', '#')
                const collectionInput = () => {
                    const subUL = document.createElement('ul')
                    subUL.classList.add('dropdown')
                        const subItem1 = () => {
                            const item1 = document.createElement('li')
                            item1.innerText = 'Work'
                            item1.setAttribute('id', 'work')
                            return item1;
                        }
                        const subItem2 = () => {
                            const item2 = document.createElement('li')
                            item2.innerText = 'Chores'
                            item2.setAttribute('id', 'chores')
                            return item2;
                        }
                        const subItem3 = () => {
                            const item3 = document.createElement('li')
                            item3.innerText = 'Personal'
                            item3.setAttribute('id', 'personal')
                            return item3;
                        }
                        const subItem4 = () => {
                            const item4 = document.createElement('li')
                            item4.innerText = 'Family/Friends'
                            item4.setAttribute('id', 'famfriends')
                            return item4;
                        }
                    
                    subUL.appendChild(subItem1())
                    subUL.appendChild(subItem2())
                    subUL.appendChild(subItem3())
                    subUL.appendChild(subItem4())
                    return subUL;
                }
            li.appendChild(aTag)
            li.appendChild(collectionInput())
           
            return li;
        }
        const liPriority = () => {
            const li = document.createElement('li')
            const aTag = document.createElement('a')
            aTag.innerText = 'Priority'
            aTag.setAttribute('id', 'priority')
            aTag.setAttribute('href', '#')
                const priorityInput = () => {
                    const subUL = document.createElement('ul')
                        subUL.classList.add('dropdown')
                        const subItem1 = () => {
                            const item1 = document.createElement('li')
                            item1.innerText = 'Green'
                            item1.setAttribute('id', 'green')
                            return item1;
                        }
                        const subItem2 = () => {
                            const item2 = document.createElement('li')
                            item2.innerText = 'Yellow'
                            item2.setAttribute('id', 'yellow')
                            return item2;
                        }
                        const subItem3 = () => {
                            const item3 = document.createElement('li')
                            item3.innerText = 'Red'
                            item3.setAttribute('id', 'red')
                            return item3;
                        }
                        const subItem4 = () => {
                            const item4 = document.createElement('li')
                            item4.innerText = 'YESTERDAY'
                            item4.setAttribute('id', 'yesterday')
                            return item4;
                        }
                    
                    subUL.appendChild(subItem1())
                    subUL.appendChild(subItem2())
                    subUL.appendChild(subItem3())
                    subUL.appendChild(subItem4())
                    return subUL;
                }
            li.appendChild(aTag)
            li.appendChild(priorityInput())
            return li;
        }
        const liNotes = () => {
            const li = document.createElement('li')
            const notes = document.createElement('p')
                notes.setAttribute('id', 'notes')
                notes.innerText = 'notes'
                const noteField = () => {
                    const input = document.createElement('textarea')
                    input.setAttribute('id', 'textarea')
                    input.setAttribute('rows', '4')
                    input.setAttribute('cols', '30')
                    return input;
                }
            notes.appendChild(noteField())
            li.appendChild(notes)
            return li;
        }
        ul.appendChild(liTitle())
        ul.appendChild(liCollection())
        ul.appendChild(liPriority())
        ul.appendChild(liNotes())
        
        return ul
    }
    const submitBtn = () => {
        const submit = document.createElement('button')
        submit.setAttribute('id', 'submit')
        submit.innerText = 'Add Task'
        return submit
    }
    
    //create UL. Use LI func to make multiple form items.
    form.appendChild(createList())
    form.appendChild(submitBtn())
    formDiv.appendChild(form)

    return formDiv;
}

export { createForm }