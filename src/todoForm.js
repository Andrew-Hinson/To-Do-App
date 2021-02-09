const createForm = () => {
    
    const flipForm = document.createElement('form')
    flipForm.setAttribute('id', 'flipForm')

    const setTitleLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('id', 'titleLabel')
        label.setAttribute('for', 'title')
        label.classList.add('formItem')
        label.innerText = 'Task Title:'
        return label;
    }
    const setTitle = () => {
        const title = document.createElement('input')
        title.setAttribute('type', 'text')
        title.setAttribute('id', 'title')
        title.setAttribute('name', 'title')
        title.classList.add('formItem')
        title.setAttribute('minlength', '4')
        title.setAttribute('maxlength', '10')
        return title;
    }
    const setNotesLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('for', 'formNotes')
        label.classList.add('formItem')
        label.innerText = 'Notes:'
        return label;
    }
    const notes = () => { 
        const noteInput = document.createElement('textarea')
        noteInput.setAttribute('id', 'notes')
        noteInput.setAttribute('name', 'notes')
        noteInput.setAttribute('rows', '4')
        noteInput.setAttribute('cols', '30')
        noteInput.setAttribute('placeholder', 'Enter a description of your task!') 
        noteInput.classList.add('formItem')
        return noteInput;
    }
    const discardBtn = () => {
        const discard = document.createElement('button')
        discard.setAttribute('type', 'submit')
        discard.setAttribute('id', 'formDiscard')
        discard.setAttribute('value', 'Add Task!')
        discard.classList.add('formItem', 'addTrash')
        discard.innerText = 'Discard Task'
        return discard;
    }
    const submitBtn = () => {
        const submit = document.createElement('input')
        submit.setAttribute('type', 'submit')
        submit.setAttribute('id', 'formSubmit')
        submit.setAttribute('value', 'Add Task!')
        submit.classList.add('formItem', 'addTrash')
        return submit;
    }
    flipForm.appendChild(setTitleLabel())
    flipForm.appendChild(setTitle())
    flipForm.appendChild(setNotesLabel())
    flipForm.appendChild(notes())
    flipForm.appendChild(discardBtn())
    flipForm.appendChild(submitBtn())

    return flipForm
}

export { createForm }