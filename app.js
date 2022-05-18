const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 60;
canvas.height = 400;

let context = canvas.getContext('2d');
context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

let draw_color = 'black';
let draw_width = '2';
let is_drawing = false; // It's used to specify whether we're drawing or not

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
  is_drawing = true;
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop);
  event.preventDefault(); // To prevent changes from disappearing
}

function draw(event) {
  if (is_drawing) {
    context.lineTo(event.clientX - canvas.offsetLeft,
      event.clientY - canvas.offsetTop);
    context.strokeStyle = draw_color;
    context.lineWidth = draw_width;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.stroke();
  }
  event.preventDefault();
}

function stop(event) {
  if (is_drawing) {
    context.stroke();
    context.closePath();
    is_drawing = false;
  }
  event.preventDefault();
}