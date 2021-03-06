const stats = () => {
    
const cardParent = document.createElement('div')


    
    cardParent.classList.add('homeParent')
        
    const card = document.createElement('div')
        card.classList.add('homeCard')
    
    const cardFront = document.createElement('div')

        

    const cardFrontStyle = (() => {
        cardFront.classList.add('homeCardFront')
        cardFront.classList.add('statsFront')
        cardFront.innerText = 'This is test content'
        return cardFront;
    })()

    const cardOther = document.createElement('div')
    const cardOtherAdd = (() => {
        cardOther.classList.add('homeCardBack')
        cardOther.classList.add('backStats')
        return cardOther;
    })()

    
    card.appendChild(cardFront)
    card.appendChild(cardOther)
    cardParent.appendChild(card)



return cardParent;
}

export { stats }