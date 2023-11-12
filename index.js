const draggableElements = document.querySelectorAll('.draggable-element')
const dropZones = document.querySelectorAll('.container');

draggableElements.forEach(draggable => {
    const draggableElementHandle = draggable.querySelector('.drag-handle');

    draggableElementHandle.addEventListener('mousedown', e => {
        draggable.setAttribute('draggable', true);
    })

    draggableElementHandle.addEventListener('mouseup', e => {
        console.log('mouse lifted')
        draggable.setAttribute('draggable', false);
    })

    draggable.addEventListener('dragstart', e => {
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', e => {
        draggable.classList.remove('dragging');
        draggable.setAttribute('draggable', false);
    })

})

dropZones.forEach(dropZone => {
    dropZone.addEventListener('dragenter', e => {
        e.preventDefault();
        dropZone.classList.add('hovered');   
    })

    dropZone.addEventListener('dragover', e => {
    
        e.preventDefault();
        const currentlyDraggedElement = document.querySelector('[draggable="true"]')
        
        const afterElement = getDragAfterElement(dropZone, e.clientY);

        if (afterElement == null) {
            dropZone.appendChild(currentlyDraggedElement)
          } else {
            dropZone.insertBefore(currentlyDraggedElement, afterElement)
          }
        
    })

    dropZone.addEventListener('dragleave', e => {
        dropZone.classList.remove('hovered');
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable-element:not([draggable="true"])')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }