import { collectionList, priorityList } from './dropDowns.js'
import { menu } from './menu.js'
import { dialog } from './dialog.js';

const landing = () => {
    const content = document.querySelector('#content')
    const cards = document.createElement('div')
        cards.classList.add('cards')
        cards.classList.add('container')

    const headingDiv = document.createElement('div')
    headingDiv.setAttribute('id', 'headingDiv')

    const currentSection = () => {
        const sectionHeading = document.createElement('h1');
        const headingSpan = document.createElement('span');

        headingSpan.setAttribute('id','categoryTitle')
        headingSpan.innerText = 'Tasks'
        sectionHeading.appendChild(headingSpan)

        return sectionHeading;
    }

    headingDiv.appendChild(menu())
    headingDiv.appendChild(currentSection())

    content.appendChild(headingDiv)
    content.appendChild(cards)
    content.appendChild(dialog())
   
    return content;
}

export { landing }

