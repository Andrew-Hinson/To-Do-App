
//used in Display.js // //called with index.js {Task}//
const cardCreation = (item) => {
    //id directly tied to each card

    const cardParent = document.createElement('div')
        cardParent.classList.add('cardParent')
        cardParent.setAttribute('id', `cardParent${item.id}`)
        cardParent.dataset.category = item.category;
        cardParent.dataset.id = item.id

    const card = document.createElement('div')
        card.classList.add('card')
        card.dataset.category = item.category;

    const cardTitle = document.createElement('p')  
        cardTitle.innerText = item.title
        cardTitle.classList.add('frontCardTitle')
        cardTitle.classList.add(`title${item.id}`)

    const frontCheckMark = document.createElement('div')
        frontCheckMark.classList.add('cardFrontCheck')
        frontCheckMark.setAttribute('id', `frontCheck${item.id}`)
    
    const notesLabel = document.createElement('label')
    notesLabel.setAttribute('for', `cardNote${item.id}`)
    notesLabel.innerText = 'Notes: ';    

    const cardNotes = document.createElement('textarea')
        cardNotes.setAttribute('id', `cardNote${item.id}`)
        cardNotes.classList.add('cardNotes')
        cardNotes.setAttribute('rows', '4')
        cardNotes.setAttribute('cols', '20')
        cardNotes.setAttribute('maxlength', '50')
        cardNotes.innerText = item.notes
        notesLabel.appendChild(cardNotes)

    
    const cardFront = document.createElement('div')

    // eslint-disable-next-line no-unused-vars
    const cardFrontStyle = (() => {
        cardFront.classList.add('cardFront')
        cardFront.appendChild(cardTitle)
        cardFront.appendChild(frontCheckMark)
        cardFront.dataset.category = item.category;
        return cardFront;
    })()
    
    const cardBack = document.createElement('div')
    // eslint-disable-next-line no-unused-vars
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
                checkboxLabel.setAttribute('for',`greenbox${item.id}`)
                checkboxLabel.classList.add('checkContainer')
                
            const cardChecked = document.createElement('input')
                cardChecked.setAttribute('type', 'radio')
                cardChecked.setAttribute('name', `radio${item.id}`)
                cardChecked.setAttribute('id',`greenbox${item.id}`)
                cardChecked.setAttribute('value', 1)
                cardChecked.classList.add(`cardRadio${item.id}`)
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
                checkboxLabel.setAttribute('for',`yellowbox${item.id}`)
                checkboxLabel.classList.add('checkContainer')
                
    
            const cardChecked = document.createElement('input')
                cardChecked.setAttribute('type', 'radio')
                cardChecked.setAttribute('name', `radio${item.id}`)
                cardChecked.setAttribute('id',`yellowbox${item.id}`)
                cardChecked.setAttribute('value', 2)
                cardChecked.classList.add(`cardRadio${item.id}`)

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
                checkboxLabel.setAttribute('for',`redbox${item.id}`)
                checkboxLabel.classList.add('checkContainer')
                
    
            const cardChecked = document.createElement('input')
                cardChecked.setAttribute('type', 'radio')
                cardChecked.setAttribute('name', `radio${item.id}`)
                cardChecked.setAttribute('value', 3)
                cardChecked.setAttribute('id', `redbox${item.id}`)
                cardChecked.classList.add(`cardRadio${item.id}`)

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
        
        button.dataset.id = item.id;
        button.innerText = 'SAVE';
        return button;
    }
    const completeBtn = () => {
        const button = document.createElement('button')
    
        button.classList.add('complete')
        button.dataset.category = item.category;
        
        button.dataset.id = item.id;
        button.innerText = 'COMPLETE';
        return button;
    }
    const deleteBtn = () => {
        
        const button = document.createElement('button')
        
        button.classList.add('delete')
        button.dataset.category = item.category;
        
        button.dataset.id = item.id;
        button.innerText = 'DELETE';
        return button;
    }

  
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