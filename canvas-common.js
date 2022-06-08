const canvasReal = $('#canvas-real')[0];
const ctxReal = canvasReal.getContext('2d');
const canvasDraft = $('#canvas-draft')[0];
const ctxDraft = canvasDraft.getContext('2d');
let drawColour = 'black';
let drawWidth = '2';
let currentDrawingFunction; // currentDrawingFunction refers to a class instance
let dragging = false;

// $(() => {}); is equivalent to $(document).ready(() => {}); which is deprecated
$(() => {

  $('#canvas-draft').on('mousedown', e => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    currentDrawingFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
  });

  $('#canvas-draft').on('mousemove', e => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    if (dragging) {
      currentDrawingFunction.onDragging([mouseX, mouseY], e);
    }
    currentDrawingFunction.onMouseMove([mouseX, mouseY], e);
  });

  $('#canvas-draft').on('mouseup', e => {
    dragging = false;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    currentDrawingFunction.onMouseUp([mouseX, mouseY], e);
  });

  $('#canvas-draft').on('mouseleave', e => {
    dragging = false;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    currentDrawingFunction.onMouseLeave([mouseX, mouseY], e);
  });

  $('#canvas-draft').on('mouseenter', e => {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    currentDrawingFunction.onMouseEnter([mouseX, mouseY], e);
  });
  
});

class PaintFunction {
  constructor() { }
  onMouseDown() { }
  onDragging() { }
  onMouseMove() { }
  onMouseUp() { }
  onMouseLeave() { }
  onMouseEnter() { }
}