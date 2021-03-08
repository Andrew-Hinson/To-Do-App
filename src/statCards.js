
const stats = () => {
    
const ctx = document.createElement('canvas')

    ctx.classList.add('ctxParent')
    ctx.setAttribute('aria-label', 'main stats')
    ctx.setAttribute('role', 'img')
    ctx.style.width = '20rem'
    ctx.style.height = '20rem'
        
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
    ctx.appendChild(card)

return ctx;
}

export { stats }