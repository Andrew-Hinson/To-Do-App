const createForm = () => {
    
    const flipForm = document.createElement('form')

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
        const input = document.createElement('input')
        input.setAttribute('type', 'textarea')
        input.setAttribute('id', 'formNotes')
        return input;
    }
    const submitBtn = () => {
        const submit = document.createElement('button')
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