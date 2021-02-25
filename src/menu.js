
const menu = () => {
    const headUl = document.createElement('ul'); //main ul for first li item to reside in for styling
        headUl.classList.add('menu')
        headUl.setAttribute('id', 'mainMenu')

    const headLi = document.createElement('li'); //main li to append subUL to for dropdown
     const firstLi = () => {
        const homeBtn = document.createElement('a')
        homeBtn.setAttribute('id','homeBtn')
        homeBtn.innerText = 'Menu'
        headLi.appendChild(homeBtn)
        return homeBtn;
    }
                                    
    const subMenu = () => {         //options can be changed-added to later
        const ul = document.createElement('ul')
        ul.setAttribute('id','subMenu')

        const subLi2 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')

            li.classList.add('newFlip')
            li.classList.add('workCat')
            
            a.classList.add('newFlip')
            a.classList.add('workCat')
            
            a.setAttribute('href', '#')
            a.innerText = 'Work'
            li.appendChild(a)
            return li;
        }
        const subLi3 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')

            li.classList.add('newFlip')
            li.classList.add('choresCat')

            a.classList.add('newFlip')
            a.classList.add('choresCat')

            a.setAttribute('href', '#')
            a.innerText = 'Chores'
            li.appendChild(a)
            return li;
        }
        const subLi4 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')

            li.classList.add('newFlip')
            li.classList.add('personalCat')

            a.classList.add('newFlip')
            a.classList.add('personalCat')

            a.setAttribute('href', '#')
            a.innerText = 'Personal'
            li.appendChild(a)
            return li;
        }
        const subLi5 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')

            li.classList.add('newFlip')
            li.classList.add('schoolCat')

            a.classList.add('newFlip')
            a.classList.add('schoolCat')

            a.setAttribute('href', '#')
            a.innerText = 'School'
            li.appendChild(a)
            return li;
        }
        
        ul.appendChild(subLi2());
        ul.appendChild(subLi3());
        ul.appendChild(subLi4());
        ul.appendChild(subLi5());
        return ul;
    }
    
    headLi.appendChild(firstLi())
    headLi.appendChild(subMenu())
    headUl.appendChild(headLi)
    
    return headUl
}
export { menu }