import { collectionList, priorityList } from './dropDowns.js'
import { menu } from './menu.js'
import { dialog } from './dialog.js';

const landing = () => {
    const content = document.querySelector('#content')
    const cards = document.createElement('div')
        cards.classList.add('cards')

    content.appendChild(menu())
    content.appendChild(cards)
    content.appendChild(dialog())
   
    return content;
}

export { landing }