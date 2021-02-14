const dialog = () => {
    const dialog = document.createElement('dialog')
    dialog.setAttribute('id', 'dialogForm')
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

        }
        const li1 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('input')
            
        }
        const li2 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('input')
            
        }
        const li3 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('input')
            
        }
        const li4 = () => {
            const li = document.createElement('li')
            const label = document.createElement('label')
            const input = document.createElement('input')
            
        }
        ul.appendChild(li0())
        ul.appendChild(li1())
        ul.appendChild(li2())
        ul.appendChild(li3())
        ul.appendChild(li4())
        return ul;
    }
    form.appendChild(ul())
    dialog.appendChild(form)
    return dialog;
}