import { collectionList , checkBoxes } from './dropDowns.js';
import { Task } from './Tasks.js';
let i
//used in Display.js // //called with index.js {Task}//
const cardCreation = (item) => {
    
    const cardParent = document.createElement('div')
        cardParent.classList.add('cardParent')
        cardParent.setAttribute('id', `cardParent${i}`)
        cardParent.dataset.category = item.category;
        cardParent.dataset.position = item.position

    const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.category = item.category;

    const cardTitle = document.createElement('p')  
        cardTitle.innerText = item.title
        cardTitle.classList.add('frontCardTitle')

    const notesLabel = document.createElement('label')
        notesLabel.setAttribute('for', `cardNote${i}`)
        notesLabel.innerText = 'Notes: ';
    
    const frontCheckMark = document.createElement('div')
        frontCheckMark.classList.add('cardFrontCheck')
        frontCheckMark.setAttribute('id', `frontCheck${i}`)
    
    const cardNotes = document.createElement('textarea')
        cardNotes.setAttribute('id', `cardNote${i}`)
        cardNotes.classList.add('cardNotes')
        cardNotes.setAttribute('rows', '4')
        cardNotes.setAttribute('cols', '20')
        cardNotes.setAttribute('maxlength', '50')
        cardNotes.innerText = item.notes
        notesLabel.appendChild(cardNotes)

    
    const cardFront = document.createElement('div')

    const cardFrontStyle = (() => {
        cardFront.classList.add('cardFront')
        cardFront.appendChild(cardTitle)
        cardFront.appendChild(frontCheckMark)
        cardFront.dataset.category = item.category;
        return cardFront;
    })()
    
    const cardBack = document.createElement('div')
    const cardBackStyle = (() => {
        cardBack.classList.add('cardBack')
        cardBack.appendChild(notesLabel)
        cardBack.dataset.category = item.category;
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
                //set checked on card if checked in dialog
                if(item.priority === '1'){
                    cardChecked.checked = !cardChecked.checked;
                    frontCheckMark.classList.toggle('green')
                }
                //////////////////////////////////////COME FIX THIS
    
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
                if(item.priority === '2'){
                    cardChecked.checked = !cardChecked.checked;
                    frontCheckMark.classList.toggle('yellow')
                }
            
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
                if(item.priority === '3'){
                    cardChecked.checked = !cardChecked.checked;
                    frontCheckMark.classList.toggle('red')
                }
            
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
    const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('buttonContainer')

    //s${i} - save
    //c${i} -complete
    //c${i} -delete

    const saveBtn = () => {
        const button = document.createElement('button')
        
        button.classList.add('save')
        button.dataset.category = item.category;
        button.dataset.position = `${item.position}`;
        button.innerText = 'SAVE';
        return button;
    }
    const completeBtn = () => {
        const button = document.createElement('button')
    
        button.classList.add('complete')
        button.dataset.category = item.category;
        button.dataset.position = item.position;
        button.innerText = 'COMPLETE'
        return button;
    }
    const deleteBtn = () => {
        
        // taskPosition.toString()
        const button = document.createElement('button')
        
        button.classList.add('delete')
        button.dataset.category = item.category;
        button.dataset.position = item.position;
        button.innerText = 'DELETE'
        return button;
    }

    i++
    cardBack.appendChild(cardBoxes())
    cardBack.appendChild(saveBtn())
    cardBack.appendChild(deleteBtn())
    cardBack.appendChild(completeBtn())
    card.appendChild(cardFront)
    card.appendChild(cardBack)
    cardParent.appendChild(card)
    return cardParent;
    // 
    // const cardBack = document.createElement('div')
}
export { cardCreation }