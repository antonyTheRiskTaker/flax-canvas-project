// (Line below) jQuery equivalent of getElementById
const canvas = $('#canvas')[0];
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

let startBackgroundColor = "white";
ctx.fillStyle = startBackgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

let dragging = false;

// Equivalent to $(document).ready(() => {});
$(() => {
  // Get coordinates via mousedown
  $('#canvas').on('mousedown', e => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    console.log(`X Coordinate: ${mouseX}`);
    console.log(`Y Coordinate: ${mouseY}`);
  });

  // Get coordinates via mousemove
  // $('#canvas').on('mousemove', e => {
  //   const mouseX = e.offsetX;
  //   const mouseY = e.offsetY;
  //   console.log(`X Coordinate: ${mouseX}`);
  //   console.log(`Y Coordinate: ${mouseY}`);
  // });

  // Get coordinates via mouseup
  // $('#canvas').on('mouseup', e => {
  //   const mouseX = e.offsetX;
  //   const mouseY = e.offsetY;
  //   console.log(`X Coordinate: ${mouseX}`);
  //   console.log(`Y Coordinate: ${mouseY}`);
  // });

  // Get coordinates via mouseleave
  // $('#canvas').on('mouseleave', e => {
  //   const mouseX = e.offsetX;
  //   const mouseY = e.offsetY;
  //   console.log(`X Coordinate: ${mouseX}`);
  //   console.log(`Y Coordinate: ${mouseY}`);
  // });
});

// let drawColour = 'black';
// let drawWidth = '2';
// let isDrawing = false; // It's used to specify whether we're drawing or not

// let restoreArray = [];
// let index = -1;

// function changeColour(element) {
//   drawColour = element.style.background;
// }

// // (Lines below) events starting with 'touch' is dedicated to touch devices, so this app can be used on mobile devices
// // (Line below) 'start' is a custom function
// canvas.addEventListener('touchstart', start, false);
// // (Line below) 'draw' is a custom function
// canvas.addEventListener('touchmove', draw, false);
// canvas.addEventListener('mousedown', start, false);
// canvas.addEventListener('mousemove', draw, false);

// canvas.addEventListener('touchend', stop, false);
// canvas.addEventListener('mouseup', stop, false);
// canvas.addEventListener('mouseout', stop, false);

// function start(event) {
//   isDrawing = true;
//   ctx.beginPath();
//   ctx.moveTo(event.clientX - canvas.offsetLeft,
//     event.clientY - canvas.offsetTop);
//   event.preventDefault(); // To prevent changes from disappearing
// }

// function draw(event) {
//   if (isDrawing) {
//     ctx.lineTo(event.clientX - canvas.offsetLeft,
//       event.clientY - canvas.offsetTop);
//     ctx.strokeStyle = drawColour;
//     ctx.lineWidth = drawWidth;
//     ctx.lineCap = 'round';
//     ctx.lineJoin = 'round';
//     ctx.stroke();
//   }
//   event.preventDefault();
// }

// function stop(event) {
//   if (isDrawing) {
//     ctx.stroke();
//     ctx.closePath();
//     isDrawing = false;
//   }
//   event.preventDefault();

//   if (event.type != 'mouseout') {
//     restoreArray.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
//     index += 1;
//     console.log(restoreArray);
//   }
// }

// function clearCanvas() {
//   ctx.fillStyle = startBackgroundColor;
//   // (Line below) it turns the canvas to transparent black
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   restoreArray = [];
//   index = -1;
// }

// function undoLast() {
//   if (index <= 0) {
//     clearCanvas();
//   } else {
//     index -= 1;
//     restoreArray.pop();
//     ctx.putImageData(restoreArray[index], 0, 0);
//   }
// }

// function drawRectangle() {
//   // Define start point
//   ctx.beginPath();
//   ctx.rect(20, 20, 150, 100);
//   ctx.stroke();
// }

// function drawExercise(ctx, start, end) {
//   // ctx.beginPath();
//   // ctx.moveTo(20, 20);
//   // ctx.lineTo(200, 200);
//   // ctx.stroke();
//   ctx.beginPath();
//   ctx.moveTo(start[0], start[1]);
//   console.log("Starting X coordinate: " + start[0]);
//   console.log("Starting Y coordinate: " + start[1]);
//   ctx.lineTo(end[0], end[1]);
//   console.log("Ending X coordinate: " + end[0]);
//   console.log("Ending Y coordinate: " + end[1]);
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.moveTo(end[0], start[0]);
//   ctx.lineTo(start[0], end[0]);
//   ctx.stroke();
// }