// const submenu = document.querySelector('#subMenu')

// submenu.addEventListener('click', (e)=> {
//     let target = e.target
//     console.log(e)
//     if(target.firstChild.id === 'newFlip' || target.id === 'newFlip'){
        
//     }
    
//     }
// )

(() => {
    const newTask = document.querySelector('#subMenu');
    const cancelButton = document.getElementById('cancel');
    const dialog = document.getElementById('bookCreation');
  
    newTask.addEventListener('click', function() {
      dialog.showModal();
    });
    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function() {
      dialog.close();
    });
})();