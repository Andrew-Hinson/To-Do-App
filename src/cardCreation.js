import { collectionList , priorityList } from './dropDowns.js';

//used in Display.js
const cardCreation = (item) => {
    let i = 0
    const cardParent = document.createElement('div')
        cardParent.classList.add('cardParent')

    const card = document.createElement('div')
        card.classList.add('card')

    const cardTitle = document.createElement('p')  
        cardTitle.innerText = item.title

    const notesLabel = document.createElement('label')
        notesLabel.setAttribute('for', `cardNote${i}`)
        notesLabel.innerText = 'Notes: '

    //
    const cardNotes = document.createElement('textarea')
        cardNotes.setAttribute('id', `cardNote${i}`)
        cardNotes.classList.add('cardNotes')
        cardNotes.setAttribute('rows', '4')
        cardNotes.setAttribute('cols', '20')
        cardNotes.setAttribute('maxlength', '50')
        cardNotes.innerText = item.notes
    notesLabel.appendChild(cardNotes)

    

    const cardFront = () => {
        const cardFront = document.createElement('div')
        cardFront.classList.add('cardFront')
        cardFront.appendChild(cardTitle)

        return cardFront;
    }
    const cardBack = () => {
        const cardBack = document.createElement('div')
        cardBack.classList.add('cardBack')
        cardBack.appendChild(notesLabel)
        // const  subdiv = document.createElement('div')
        // subdiv.innerText = 'Card Back'
        // cardBack.appendChild(priorityList())
       
        return cardBack;
    }
    i++
    
    card.appendChild(cardFront())
    card.appendChild(cardBack())
    cardParent.appendChild(card)
    return cardParent;
    // 
    // const cardBack = document.createElement('div')
}
export { cardCreation }