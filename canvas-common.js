const canvasReal = $('#canvas-real')[0];
const ctxReal = canvasReal.getContext('2d');
const canvasDraft = $('#canvas-draft')[0];
const ctxDraft = canvasDraft.getContext('2d');
let currentFunction; // currentFunction refers to a class instance
let dragging = false;

// I wonder if I should add a $(() => {}) to encompass all these event handlers;
// $(() => {}); is equivalent to $(document).ready(() => {}); which is deprecated

$('#canvas-draft').on('mousedown', e => {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseDown([mouseX, mouseY], e);
  dragging = true;
});

$('#canvas-draft').on('mousemove', e => {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  if (dragging) {
    currentFunction.onDragging([mouseX, mouseY], e);
  }
  currentFunction.onMouseMove([mouseX, mouseY], e);
});

$('#canvas-draft').on('mouseup', e => {
  dragging = false;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseUp([mouseX, mouseY], e);
});

$('#canvas-draft').on('mouseleave', e => {
  dragging = false;
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$('#canvas-draft').on('mouseenter', e => {
  const mouseX = e.offsetX;
  const mouseY = e.offsetY;
  currentFunction.onMouseEnter([mouseX, mouseY], e);
});

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
}