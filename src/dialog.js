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

        const li0 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('input')
            label.setAttribute('for', 'titleInput')
            label.innerText = 'Flip Title:'
            input.setAttribute('id', 'titleInput')
            input.setAttribute('type', 'text')
            input.setAttribute('maxlength', '12')
            label.appendChild(input)
            li.appendChild(label)
            return li;
        }
        const li1 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('input')
            label.innerText = 'Notes:'
            label.setAttribute('for', 'notesInput')
            input.setAttribute('type', 'textarea')
            input.setAttribute('id', 'notesInput')
            label.appendChild(input)
            li.appendChild(label)
            return li;

        }
        // const li2 = () => {
        //     const li = document.createElement('li')
        //     const label = document.createElement('label')
        //     const input = document.createElement('input')
        //     label.setAttribute('for', '')
        //     input.setAttribute('type', '')
        // }
        // const li3 = () => {
        //     const li = document.createElement('li')
        //     const label = document.createElement('label')
        //     const input = document.createElement('input')
        //     label.setAttribute('for', '')
        //     input.setAttribute('type', '')
        // }
        // const li4 = () => {
        //     const li = document.createElement('li')
        //     const label = document.createElement('label')
        //     const input = document.createElement('input')
        //     label.setAttribute('for', '')
        //     input.setAttribute('type', '')
        // }
            
        ul.appendChild(li0())
        ul.appendChild(li1())
        
        // ul.appendChild(li2())
        // ul.appendChild(li3())
        // ul.appendChild(li4())
        return ul;
    }
    const cancel = () => {
        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('id', 'cancel')
        cancelBtn.innerText = 'Cancel'
        return cancelBtn;
    }
    form.appendChild(ul())
    form.appendChild(cancel())
    dialog.appendChild(form)
    return dialog;
}
export { dialog }