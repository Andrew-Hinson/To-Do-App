
const menu = () => {
    //main ul for first li item to reside in for styling
    const headUl = document.createElement('ul'); 
        headUl.classList.add('menu')
        headUl.setAttribute('id', 'mainMenu')

    //main li to append subUL to for dropdown
    const headLi = document.createElement('li'); 
        headLi.setAttribute('id','homeBtn')
        headLi.innerText = 'Home'
        
    
     //options can be changed-added to later                               
    const subMenu = () => {        
        const ul = document.createElement('ul')
        ul.setAttribute('id','subMenu')

        
        const subLi2 = () => {
            const li = document.createElement('li')
            
            li.classList.add('newFlip')
            li.classList.add('workCat')
            li.setAttribute('id', 'Work')
            li.setAttribute('value', 0)

            li.innerText = 'Work'

            return li;
        }
        const subLi3 = () => {
            const li = document.createElement('li')
            

            li.classList.add('newFlip')
            li.classList.add('choresCat')
            li.setAttribute('id','Chores')
            li.setAttribute('value', 1)

            li.innerText = 'Chores';
            
            return li;
        }
        const subLi4 = () => {
            const li = document.createElement('li')
            

            li.classList.add('newFlip')
            li.classList.add('personalCat')
            li.setAttribute('id', 'Personal')
            li.setAttribute('value', 2)

            li.innerText = 'Personal';

            return li;
        }
        const subLi5 = () => {
            const li = document.createElement('li')
            
            li.classList.add('newFlip')
            li.classList.add('studyCat')
            li.setAttribute('id','Study')
            li.setAttribute('value', 3)

            li.innerText = 'Study'

            return li;
        }
        
        ul.appendChild(subLi2());
        ul.appendChild(subLi3());
        ul.appendChild(subLi4());
        ul.appendChild(subLi5());
        return ul;
    }
    
    
    headLi.appendChild(subMenu())
    headUl.appendChild(headLi)
    
    return headUl
}
export { menu }