
    
const collectionList = () => {
 const select1 = document.createElement('select')
 select1.setAttribute('id', 'collection')

        const subItem1 = () => {
            const item1 = document.createElement('option')
            item1.innerText = 'Work'
            item1.setAttribute('id', 'work')
            return item1;
        }
        const subItem2 = () => {
            const item2 = document.createElement('option')
            item2.innerText = 'Study'
            item2.setAttribute('id', 'Study')
            return item2;
        }
        const subItem3 = () => {
            const item3 = document.createElement('option')
            item3.innerText = 'Personal'
            item3.setAttribute('id', 'personal')
            return item3;
        }
        const subItem4 = () => {
            const item4 = document.createElement('option')
            item4.innerText = 'Chores'
            item4.setAttribute('id', 'chores')
            return item4;
        }
     
     select1.appendChild(subItem1())
     select1.appendChild(subItem2())
     select1.appendChild(subItem3())
     select1.appendChild(subItem4())
    return select1
}
    

const priorityList = () => {
    const select2 = document.createElement('select')
    select2.setAttribute('id', 'priority')

        const subItem1 = () => {
            const item1 = document.createElement('option')
            item1.innerText = 'Green'
            item1.setAttribute('id', 'green')
            return item1;
        }
        const subItem2 = () => {
            const item2 = document.createElement('option')
            item2.innerText = 'Yellow'
            item2.setAttribute('id', 'yellow')
            return item2;
        }
        const subItem3 = () => {
            const item3 = document.createElement('option')
            item3.innerText = 'Red'
            item3.setAttribute('id', 'red')
            return item3;
        }
        const subItem4 = () => {
            const item4 = document.createElement('option')
            item4.innerText = 'YESTERDAY'
            item4.setAttribute('id', 'red')
            return item4;
        }
        
        select2.appendChild(subItem1())
        select2.appendChild(subItem2())
        select2.appendChild(subItem3())
        select2.appendChild(subItem4())
       return select2
}


export { collectionList, priorityList }