const createForm = () => {
    
    const flipForm = document.createElement('form')
    flipForm.setAttribute('id', 'flipForm')

    const setTitleLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('id', 'titleLabel')
        label.setAttribute('name', 'titleLabel')
        label.innerText = 'Task Title:'
        return label;
    }
    const setTitle = () => {
        const title = document.createElement('input')
        title.setAttribute('type', 'text')
        title.setAttribute('id', 'formTitle')
        title.setAttribute('name', 'titleLabel')
        title.setAttribute('minlength', '4')
        title.setAttribute('maxlength', '10')
        return title;
    }
    
    const setRadioLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('id', 'radioLabel')
        label.setAttribute('name', 'radioLabel')
        label.innerText = 'Priority:'
        return label;
    }
    
    const greenBtn = () => { 
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'greenRadio')
        input.setAttribute('name', 'priority')
        input.setAttribute('class', 'formRadios')
        return input;
    }
    const yellowBtn = () => { 
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'yellowRadio')
        input.setAttribute('name', 'priority')
        input.setAttribute('class', 'formRadios')
        return input;
    }
    const redBtn = () => { 
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('id', 'greenRadio')
        input.setAttribute('name', 'priority')
        input.setAttribute('class', 'formRadios')
        return input;
    }
    const setNotesLabel = () => {
        const label = document.createElement('label')
        label.setAttribute('id', 'notesLabel')
        label.setAttribute('name', 'notesLabel')
        label.innerText = 'Notes:'
        return label;
    }
    const notes = () => { 
        const noteInput = document.createElement('textarea')
        noteInput.setAttribute('id', 'formNotes')
        noteInput.setAttribute('rows', '4')
        noteInput.setAttribute('cols', '30')
        noteInput.setAttribute('placeholder', 'Enter a description of your task!') 
        return noteInput;
    }
    const submitBtn = () => {
        const submit = document.createElement('input')
        submit.setAttribute('type', 'submit')
        submit.setAttribute('id', 'formSubmit')
        submit.innerText = 'Add Task!'
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
    flipForm.appendChild(submitBtn())

    return flipForm
}

export { createForm }