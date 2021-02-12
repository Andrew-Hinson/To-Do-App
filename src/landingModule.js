import { collectionList, priorityList } from './todoForm.js'
import { menu } from './menu.js'
const landing = () => {
    const content = document.querySelector('#content')
    const cards = document.createElement('div')
        cards.classList.add('cards')

    content.appendChild(menu())
    content.appendChild(cards)
    
    
    return content;
}

export { landing }