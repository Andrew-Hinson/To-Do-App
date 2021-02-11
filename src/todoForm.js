const createForm = () => {
    const formDiv = document.createElement('div')
        formDiv.setAttribute('id', 'formDiv');
    const form = document.createElement('form')
        form.setAttribute('id', 'form');
    
    
    const createList = () => {
        const ul = document.createElement('ul')

        const startTask = () => {
            const li = document.createElement('li')
            const title = document.createElement('a')
                title.setAttribute('id', 'title')
                title.setAttribute('href', '#')
                title.innerText = "Flip-Do's!"
                li.appendChild(title)
                return li;
        }
        const taskTitle = () => {
            const li = document.createElement('li')
            const aTag = document.createElement('a')
                aTag.setAttribute('id', 'taskFieldTitle')
                aTag.setAttribute('href', '#')
                aTag.innerText = 'New Flip-Do'
                const taskName = () => {
                    const subUL = document.createElement('ul')
                    subUL.classList.add('dropdown')
                    const subLi = document.createElement('li')
                    const label = document.createElement('label')
                    const input = document.createElement('input')
                    input.setAttribute('type', 'text')
                    input.setAttribute('id', 'task')
                    label.innerText = 'Flip-Do Name:'
                    label.appendChild(input)
                    subLi.appendChild(label)
                    subUL.appendChild(subLi)
                    return subUL;
                }
            li.appendChild(aTag)
            li.appendChild(taskName())
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
            const aTag = document.createElement('a')
                aTag.setAttribute('id', 'notes')
                aTag.setAttribute('href', '#')
                aTag.innerText = 'Notes'
                
                const noteField = () => {
                    const subUL = document.createElement('ul')
                    subUL.classList.add('dropdown')
                    const subLi = document.createElement('li')
                    const label = document.createElement('label')
                    const input = document.createElement('textarea')
                    input.setAttribute('id', 'textarea')
                    input.setAttribute('rows', '4')
                    input.setAttribute('cols', '30')
                    label.setAttribute('for', 'textarea')
                    label.innerText = 'Notes: '
                    label.appendChild(input)
                    subLi.appendChild(label)
                    subUL.appendChild(subLi)
                    return subUL;
                }
            li.appendChild(aTag)
            li.appendChild(noteField())
            return li;
        }
        const submitBtn = () => {
            const li = document.createElement('li')
            li.setAttribute('id', 'buttonLi')                
            const submit = document.createElement('button')
            submit.setAttribute('id', 'submit')
            submit.innerText = 'Add Flip!'
            li.appendChild(submit)
            return li
        }
        ul.appendChild(startTask())
        ul.appendChild(taskTitle())
        ul.appendChild(liNotes())
        ul.appendChild(liCollection())
        ul.appendChild(liPriority())
        ul.appendChild(submitBtn())
        
        
        return ul
    }
    
    
    //create UL. Use LI func to make multiple form items.
    
    form.appendChild(createList())
    formDiv.appendChild(form)

    return formDiv;
}

export { createForm }