const collectionList = () => {
   const aTag = document.createElement('a')
   aTag.innerText = 'Collection'
   aTag.setAttribute('id', 'collection')
   aTag.setAttribute('href', '#')
       const collectionInput = () => {
           const subUL = document.createElement('ul')
           subUL.classList.add('dropdown')
               const subItem1 = () => {
                   const item1 = document.createElement('li')
                   item1.innerText = 'Work'
                   item1.setAttribute('id', 'work')
                   return item1;
               }
               const subItem2 = () => {
                   const item2 = document.createElement('li')
                   item2.innerText = 'Chores'
                   item2.setAttribute('id', 'chores')
                   return item2;
               }
               const subItem3 = () => {
                   const item3 = document.createElement('li')
                   item3.innerText = 'Personal'
                   item3.setAttribute('id', 'personal')
                   return item3;
               }
               const subItem4 = () => {
                   const item4 = document.createElement('li')
                   item4.innerText = 'Family/Friends'
                   item4.setAttribute('id', 'famfriends')
                   return item4;
               }
           
           subUL.appendChild(subItem1())
           subUL.appendChild(subItem2())
           subUL.appendChild(subItem3())
           subUL.appendChild(subItem4())
           return subUL;
       }
    aTag.appendChild(collectionInput())
    return aTag;
}
const priorityList = () => {
   const aTag = document.createElement('a')
   aTag.innerText = 'Priority'
   aTag.setAttribute('id', 'priority')
   aTag.setAttribute('href', '#')
       const priorityInput = () => {
           const subUL = document.createElement('ul')
               subUL.classList.add('dropdown')
               const subItem1 = () => {
                   const item1 = document.createElement('li')
                   item1.innerText = 'Green'
                   item1.setAttribute('id', 'green')
                   return item1;
               }
               const subItem2 = () => {
                   const item2 = document.createElement('li')
                   item2.innerText = 'Yellow'
                   item2.setAttribute('id', 'yellow')
                   return item2;
               }
               const subItem3 = () => {
                   const item3 = document.createElement('li')
                   item3.innerText = 'Red'
                   item3.setAttribute('id', 'red')
                   return item3;
               }
               const subItem4 = () => {
                   const item4 = document.createElement('li')
                   item4.innerText = 'YESTERDAY'
                   item4.setAttribute('id', 'yesterday')
                   return item4;
               }
           
           subUL.appendChild(subItem1())
           subUL.appendChild(subItem2())
           subUL.appendChild(subItem3())
           subUL.appendChild(subItem4())
           return subUL;
       }
   aTag.appendChild(priorityInput())
   return aTag;
}


export { collectionList, priorityList }