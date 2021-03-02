import { collectionList , checkBoxes } from './dropDowns.js';
import { Task } from './Tasks.js';
let i = 0
//used in Display.js // //called with index.js {Task}//
const cardCreation = (item) => {
    
    const cardParent = document.createElement('div')
        cardParent.classList.add('cardParent')

    const card = document.createElement('div')
        card.classList.add('card')

    const cardTitle = document.createElement('p')  
        cardTitle.innerText = item.title
        cardTitle.setAttribute('required', 'required')
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
    
    const cardBack = document.createElement('div')
    const setCardBack = (() => {
        cardBack.classList.add('cardBack')
        cardBack.appendChild(notesLabel)
        return cardBack;
    })()
    //creating checkboxes for card has to be slightly different
    const cardBoxes = () => {
        const label = document.createElement('label')
        const checkboxDiv = document.createElement('div')
        checkboxDiv.classList.add('labelBorder')
        checkboxDiv.classList.add('checkBoxDiv')
            label.setAttribute('for', 'select1')
            label.classList.add('checkboxes')
            label.innerText = 'Priority:'
            
    
        const checkbox1 = () => {
            const checkboxLabel = document.createElement('label')
                checkboxLabel.setAttribute('for',`greenbox${i}`)
                checkboxLabel.classList.add('checkContainer')
                
            const cardChecked = document.createElement('input')
                cardChecked.setAttribute('type', 'radio')
                cardChecked.setAttribute('name', `radio${i}`)
                cardChecked.setAttribute('id',`greenbox${i}`)
                cardChecked.setAttribute('value', 1)
                cardChecked.setAttribute('checked', '')
    
            const checkSpan = document.createElement('span')
                checkSpan.classList.add('checkmark')
                checkSpan.classList.add('greenCheck')
                checkSpan.classList.add('dcheck')
    
            checkboxLabel.appendChild(cardChecked)
            checkboxLabel.appendChild(checkSpan)
            return checkboxLabel;
        }
        const checkbox2 = () => {
            const checkboxLabel = document.createElement('label')
                checkboxLabel.setAttribute('for',`yellowbox${i}`)
                checkboxLabel.classList.add('checkContainer')
                
    
            const cardChecked = document.createElement('input')
                cardChecked.setAttribute('type', 'radio')
                cardChecked.setAttribute('name', `radio${i}`)
                cardChecked.setAttribute('id',`yellowbox${i}`)
                cardChecked.setAttribute('value', 2)
            
            const checkSpan = document.createElement('span')
                checkSpan.classList.add('checkmark')
                checkSpan.classList.add('yellowCheck')
                checkSpan.classList.add('dcheck')
    
            checkboxLabel.appendChild(cardChecked)
            checkboxLabel.appendChild(checkSpan)
            return checkboxLabel;
        }
        const checkbox3 = () => {
            const checkboxLabel = document.createElement('label')
                checkboxLabel.setAttribute('for',`redbox${i}`)
                checkboxLabel.classList.add('checkContainer')
                
    
            const cardChecked = document.createElement('input')
                cardChecked.setAttribute('type', 'radio')
                cardChecked.setAttribute('name', `radio${i}`)
                cardChecked.setAttribute('value', 3)
                cardChecked.setAttribute('id', `redbox${i}`)
            
            const checkSpan = document.createElement('span')
                checkSpan.classList.add('checkmark')
                checkSpan.classList.add('redCheck')
                checkSpan.classList.add('dcheck')
    
    
            checkboxLabel.appendChild(cardChecked)
            checkboxLabel.appendChild(checkSpan)
            return checkboxLabel;
        }
        checkboxDiv.appendChild(checkbox1())
        checkboxDiv.appendChild(checkbox2())
        checkboxDiv.appendChild(checkbox3())
        label.appendChild(checkboxDiv)
    
        
        
        return label;
    }



    
    i++
    cardBack.appendChild(cardBoxes())

    card.appendChild(cardFront())
    card.appendChild(cardBack)
    cardParent.appendChild(card)
    return cardParent;
    // 
    // const cardBack = document.createElement('div')
}
export { cardCreation }