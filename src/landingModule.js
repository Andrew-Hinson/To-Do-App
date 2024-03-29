import { menu } from './menu.js'
import { dialog } from './dialog.js'

const landing = () => {
    const content = document.querySelector('#content')

    const mainContainer = document.createElement('div')
    mainContainer.setAttribute('id', 'mainContainer')

    const cards = document.createElement('div')
    cards.classList.add('cards')
    const headingDiv = document.createElement('div')
    headingDiv.setAttribute('id', 'headingDiv')

    const currentSection = () => {
        const sectionHeading = document.createElement('p')

        sectionHeading.setAttribute('id', 'headingP')
        sectionHeading.innerText = 'Category: '
        const headingSpan = document.createElement('span')

        headingSpan.setAttribute('id', 'categoryTitle')
        headingSpan.innerText = 'Home'
        sectionHeading.appendChild(headingSpan)

        return sectionHeading
    }
    const createNew = () => {
        const ul = document.createElement('ul')
        ul.classList.add('menu')
        ul.setAttribute('id', 'createNewParent')

        const li = document.createElement('li')

        li.setAttribute('id', 'CreateNew')

        li.innerText = 'New Task!'

        const subul = document.createElement('ul')
        const reset = document.createElement('li')

        reset.setAttribute('id', 'reset')
        reset.innerText = 'Reset'

        subul.appendChild(reset)
        li.appendChild(subul)
        ul.appendChild(li)

        return ul
    }

    headingDiv.appendChild(menu())
    headingDiv.appendChild(createNew())
    headingDiv.appendChild(currentSection())

    mainContainer.appendChild(cards)

    content.appendChild(headingDiv)
    content.appendChild(mainContainer)
    content.appendChild(dialog())

    return content
}

export { landing }
