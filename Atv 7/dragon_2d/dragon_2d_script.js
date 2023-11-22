let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
let dragStarted = false;

function onDragStart(event) {
  originX = event.clientX;
  originY = event.clientY;
  dragStarted = true;
  event.currentTarget.setPointerCapture(event.pointerId);
}

function onDragMove(event) {
  if (!dragStarted) {
    return;
  }
  event.preventDefault();
  const deltaX = event.clientX - originX;
  const deltaY = event.clientY - originY;
  const translateX = offsetX + deltaX;
  const translateY = offsetY + deltaY;
  event.currentTarget.style.transform = 'translate(' + 
    translateX + 'px, ' + translateY + 'px)';
}

function onDragEnd(event) {
  dragStarted = false;
  offsetX += event.clientX - originX;
  offsetY += event.clientY - originY;
}

function onKeyUp(event){
  switch(event.key){
    case 'ArrowLeft': 
      offsetX -= 10;
      dragon.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
      break;
    case 'ArrowRight': 
      offsetX += 10;
      dragon.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
      break;
    case 'ArrowUp': 
      offsetY -= 10;
      dragon.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
      break;
    case 'ArrowDown':
      offsetY += 10;
      dragon.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
      break;
    default:
      break;
  }
}

const dragon = document.querySelector('img');
dragon.addEventListener('pointerdown', onDragStart);
dragon.addEventListener('pointerup', onDragEnd);
dragon.addEventListener('pointermove', onDragMove);

document.addEventListener('keyup', onKeyUp);