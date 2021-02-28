
import { menu } from './menu.js'
import { dialog } from './dialog.js';

const landing = () => {
    const content = document.querySelector('#content')
    
    const mainContainer = document.createElement('div')
    mainContainer.setAttribute('id', 'mainContainer')

    const cards = document.createElement('div')
        cards.classList.add('cards') 
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

    mainContainer.appendChild(cards)
    
    content.appendChild(headingDiv)
    content.appendChild(mainContainer)
    content.appendChild(dialog())
   
    return content;
}

export { landing }

