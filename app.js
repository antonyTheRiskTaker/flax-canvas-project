const canvas = $('#canvas')[0];
canvas.width = window.innerWidth - 60;
canvas.height = 400;

// $('#canvas').getContext('2d');
let context = canvas.getContext('2d');
let startBackgroundColor = "white";
context.fillStyle = startBackgroundColor;
context.fillRect(0, 0, canvas.width, canvas.height);

let drawColour = 'black';
let drawWidth = '2';
let isDrawing = false; // It's used to specify whether we're drawing or not

let restoreArray = [];
let index = -1;

function changeColour(element) {
  drawColour = element.style.background;
}

// (Lines below) events starting with 'touch' is dedicated to touch devices, so this app can be used on mobile devices
// (Line below) 'start' is a custom function
canvas.addEventListener('touchstart', start, false);
// (Line below) 'draw' is a custom function
canvas.addEventListener('touchmove', draw, false);
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);

canvas.addEventListener('touchend', stop, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);

function start(event) {
  isDrawing = true;
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop);
  event.preventDefault(); // To prevent changes from disappearing
}

function draw(event) {
  if (isDrawing) {
    context.lineTo(event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop);
    context.strokeStyle = drawColour;
    context.lineWidth = drawWidth;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();
  }
  event.preventDefault();
}

function stop(event) {
  if (isDrawing) {
    context.stroke();
    context.closePath();
    isDrawing = false;
  }
  event.preventDefault();

  if (event.type != 'mouseout') {
    restoreArray.push(context.getImageData(0, 0, canvas.width, canvas.height));
    index += 1;
    console.log(restoreArray);
  }
}

function clearCanvas() {
  context.fillStyle = startBackgroundColor;
  // (Line below) it turns the canvas to transparent black
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(0, 0, canvas.width, canvas.height);

  restoreArray = [];
  index = -1;
}

function undoLast() { 
  if (index <= 0) {
    clearCanvas();
  } else {
    index -= 1;
    restoreArray.pop();
    context.putImageData(restoreArray[index], 0, 0);
  }
}