import { Task } from './Tasks.js'
    
const collectionList = () => {
 const select1 = document.createElement('select')
    select1.setAttribute('id', 'collection')
    select1.setAttribute('required', '')
        const subItem1 = () => {
            const item1 = document.createElement('option')
            item1.innerText = 'Work'
            item1.setAttribute('id', 'workSelect')
            item1.setAttribute('value', 0)
            return item1;
        }
        const subItem2 = () => {
            const item2 = document.createElement('option')
            item2.innerText = 'Chores'
            item2.setAttribute('id', 'choresSelect')
            item2.setAttribute('value', 1)
            return item2;
        }
        const subItem3 = () => {
            const item3 = document.createElement('option')
            item3.innerText = 'Personal'
            item3.setAttribute('id', 'personalSelect')
            item3.setAttribute('value', 2)
            return item3;
        }
        const subItem4 = () => {
            const item4 = document.createElement('option')
            item4.innerText = 'Study'
            item4.setAttribute('id', 'studySelect')
            item4.setAttribute('value', 3)
            return item4;
        }
        
        
     
     select1.appendChild(subItem1())
     select1.appendChild(subItem2())
     select1.appendChild(subItem3())
     select1.appendChild(subItem4())
    return select1
}
    

const checkBoxes = () => {
    const label = document.createElement('label')
    const checkboxDiv = document.createElement('div')
    checkboxDiv.classList.add('labelBorder')
    checkboxDiv.classList.add('checkBoxDiv')
        label.setAttribute('for', 'select1')
        label.classList.add('checkboxes')
        label.innerText = 'Priority:'
        label.setAttribute('id', 'priorityLabel')

    const checkbox1 = () => {
        const checkboxLabel = document.createElement('label')
            checkboxLabel.setAttribute('for','greenbox')
            checkboxLabel.classList.add('checkContainer')
            

        const cardChecked = document.createElement('input')
            cardChecked.setAttribute('type', 'radio')
            cardChecked.setAttribute('name', 'radio')
            cardChecked.setAttribute('id','greenbox')
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
            checkboxLabel.setAttribute('for','yellowbox')
            checkboxLabel.classList.add('checkContainer')
            

        const cardChecked = document.createElement('input')
            cardChecked.setAttribute('type', 'radio')
            cardChecked.setAttribute('name', 'radio')
            cardChecked.setAttribute('id',`yellowbox`)
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
            checkboxLabel.setAttribute('for','redbox')
            checkboxLabel.classList.add('checkContainer')
            

        const cardChecked = document.createElement('input')
            cardChecked.setAttribute('type', 'radio')
            cardChecked.setAttribute('name', 'radio')
            cardChecked.setAttribute('id','redbox')
            cardChecked.setAttribute('value', 3)
        
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




export { collectionList, checkBoxes }