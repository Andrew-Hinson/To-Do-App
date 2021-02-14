const menu = () => {
    const headUl = document.createElement('ul'); //main ul for first li item to reside in for styling
        headUl.classList.add('menu')

    const headLi = document.createElement('li'); //main li to append subUL to for dropdown
     const firstLi = () => {
        const homeBtn = document.createElement('a')
        homeBtn.setAttribute('id','homeBtn')
        homeBtn.innerText = 'Flip-it'
        headLi.appendChild(homeBtn)
        return homeBtn;
    }
                                    
    const subMenu = () => {         //options can be changed-added to later
        const ul = document.createElement('ul')
        ul.setAttribute('id','subMenu')
        const subLi1 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            a.setAttribute('id', 'newFlip')
            a.setAttribute('href', '#')
            a.innerText = 'New Flip!'
            li.appendChild(a)
            return li;
        }
        const subLi2 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            
            a.setAttribute('href', '#')
            a.innerText = 'Work'
            li.appendChild(a)
            return li;
        }
        const subLi3 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            
            a.setAttribute('href', '#')
            a.innerText = 'Chores'
            li.appendChild(a)
            return li;
        }
        const subLi4 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            
            a.setAttribute('href', '#')
            a.innerText = 'Personal'
            li.appendChild(a)
            return li;
        }
        const subLi5 = () => {
            const li = document.createElement('li')
            const a = document.createElement('a')
            
            a.setAttribute('href', '#')
            a.innerText = 'School'
            li.appendChild(a)
            return li;
        }
        ul.appendChild(subLi1());
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