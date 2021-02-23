import { collectionList , checkBoxes } from './dropDowns.js';

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
            label.innerText = 'Flip Title: '
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
            label.innerText = 'Notes: '
            label.setAttribute('for', 'notesInput')
            
            li.classList.add('centerLabel')
            input.setAttribute('id', 'notesInput')
            input.setAttribute('rows', '4')
            input.setAttribute('cols', '30')
            input.setAttribute('maxlength', '70')
            label.appendChild(input)
            li.appendChild(label)
            return li;

        }
        
        const li3 = () => {
            const li = document.createElement('li')
            li.classList.add('dialogLi')
            li.appendChild(checkBoxes())
            return li;
        }

        ul.appendChild(li0())
        ul.appendChild(li1())
        
        ul.appendChild(li3())
        return ul;
    }
        
    const cancel = () => {
        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('id', 'cancel')
        cancelBtn.innerText = 'Cancel'
        return cancelBtn;
    }
    
    const accept = () => {
        const acceptBtn = document.createElement('button')
        acceptBtn.setAttribute('id', 'accept')
        acceptBtn.innerText = 'Accept'
        return acceptBtn;
    }
        
    form.appendChild(ul())
    form.appendChild(cancel())
    form.appendChild(accept())
    dialog.appendChild(form)
    return dialog;
}
export { dialog }