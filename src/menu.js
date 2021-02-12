const menu = () => {
    const menu = document.createElement('div')
    menu.setAttribute('id', 'menu')
    const home = () => {
        const homeBtn = document.createElement('button')
        homeBtn.setAttribute('id','homeBtn')
        homeBtn.innerText = 'Flip-it'
        return homeBtn
    }
    menu.appendChild(home())
    return menu
}
export { menu }