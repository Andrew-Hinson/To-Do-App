import { collectionList , priorityList } from './dropDowns.js';

const dialog = () => {
    const dialog = document.createElement('dialog')
    dialog.setAttribute('id', 'dialog')
    dialog.classList.add('dialog')

    const form = document.createElement('form')
    form.setAttribute('id', 'taskForm')
    form.setAttribute('name', 'taskForm')

    const ul = () => {
        const ul = document.createElement('ul')
        ul.classList.add('dialogUl')

        const li0 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('input')
            li.classList.add('dialogLi')
            label.setAttribute('for', 'titleInput')
            label.innerText = 'Flip Title:'
            input.setAttribute('id', 'titleInput')
            input.setAttribute('type', 'text')
            input.setAttribute('maxlength', '15')
            label.appendChild(input)
            li.appendChild(label)
            return li;
        }
        const li1 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('textarea')
            li.classList.add('dialogLi')
            label.innerText = 'Notes:'
            label.setAttribute('for', 'notesInput')
            input.setAttribute('id', 'notesInput')
            input.setAttribute('rows', '4')
            input.setAttribute('cols', '30')
            input.setAttribute('maxlength', '70')
            label.appendChild(input)
            li.appendChild(label)
            return li;

        }
        const li2 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            label.setAttribute('for', 'select1')
            li.classList.add('dialogLi')
            label.innerText = 'Category: '
            label.appendChild(collectionList())
            li.appendChild(label)
            return li;
        }
        const li3 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            li.classList.add('dialogLi')
            label.setAttribute('for', 'select2')
            label.innerText = 'Priority: '
            label.appendChild(priorityList())
            li.appendChild(label)
            return li;
        }
        const li4 = () => {
            const li = document.createElement('li')
            li.classList.add('dialogLi')
            const cancel = () => {
                const cancelBtn = document.createElement('button')
                cancelBtn.setAttribute('id', 'cancel')
                cancelBtn.innerText = 'Cancel'
                return cancelBtn;
            }
            li.appendChild(cancel())
            return li;
        }
        const li5 = () => {
            const li = document.createElement('li')
            li.classList.add('dialogLi')
            const accept = () => {
                const acceptBtn = document.createElement('button')
                acceptBtn.setAttribute('type', 'submit')
                acceptBtn.setAttribute('id', 'accept')
                acceptBtn.innerText = 'Accept'
                return acceptBtn;
            }
            li.appendChild(accept())
            return li;
        }
        
        
            
        ul.appendChild(li0())
        ul.appendChild(li1())
        ul.appendChild(li2())
        ul.appendChild(li3())
        ul.appendChild(li4())
        ul.appendChild(li5())
        return ul;
    }
    form.appendChild(ul())
    dialog.appendChild(form)
    return dialog;
}
export { dialog }