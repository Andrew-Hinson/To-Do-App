const createForm = () => {
    
    const flipForm = document.createElement('form')
    flipForm.setAttribute('id', 'flipForm')

    const setTitleLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('id', 'titleLabel')
        label.setAttribute('name', 'titleLabel')
        label.classList.add('formItem')
        label.innerText = 'Task Title:'
        return label;
    }
    const setTitle = () => {
        const title = document.createElement('input')
        title.setAttribute('type', 'text')
        title.setAttribute('id', 'formTitle')
        title.setAttribute('name', 'titleLabel')
        title.classList.add('formItem')
        title.setAttribute('minlength', '4')
        title.setAttribute('maxlength', '10')
        return title;
    }
    
    const setRadioLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('id', 'radioLabel')
        label.setAttribute('name', 'radioLabel')
        label.setAttribute('for', 'radioLabel')
        label.classList.add('formItem')
        label.innerText = 'Priority:'
        return label;
    }
    
    const greenBtn = () => { 
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'greenRadio')
        input.setAttribute('value', 'greenRadio')
        input.setAttribute('name', 'green')
        input.setAttribute('checked', '')
        input.classList.add('formItem', 'formRadios')
        return input;
    }
    const yellowBtn = () => { 
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'yellowRadio')
        input.setAttribute('value', 'yellowRadio')
        input.setAttribute('name', 'yellow')
        input.classList.add('formItem', 'formRadios')
        return input;
    }
    const redBtn = () => { 
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'greenRadio')
        input.setAttribute('value', 'redRadio')
        input.setAttribute('name', 'red')
        input.classList.add('formItem', 'formRadios')
        return input;
    }
    const setNotesLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('id', 'notesLabel')
        label.setAttribute('name', 'notesLabel')
        label.classList.add('formItem', 'formRadios')
        label.innerText = 'Notes:'
        return label;
    }
    const notes = () => { 
        const noteInput = document.createElement('textarea')
        noteInput.setAttribute('id', 'formNotes')
        noteInput.setAttribute('rows', '4')
        noteInput.setAttribute('cols', '30')
        noteInput.setAttribute('placeholder', 'Enter a description of your task!') 
        noteInput.classList.add('formItem', 'formRadios')
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
    flipForm.appendChild(setRadioLabel())
    flipForm.appendChild(greenBtn())
    flipForm.appendChild(yellowBtn())
    flipForm.appendChild(redBtn())
    flipForm.appendChild(setNotesLabel())
    flipForm.appendChild(notes())
    flipForm.appendChild(discardBtn())
    flipForm.appendChild(submitBtn())

    return flipForm
}

export { createForm }