$(() => {
  $('#drawing-line').on('click', () => {
    currentFunction = new DrawingLine(ctxReal, ctxDraft);
  });

  $('#drawing-straight-line').on('click', () => {
    currentFunction = new DrawingStraightLine(ctxReal, ctxDraft);
  });

  $('#drawing-rectangle').on('click', () => {
    currentFunction = new DrawingRectangle(ctxReal, ctxDraft);
  });

  $('#drawing-circle').on('click', () => {
    currentFunction = new DrawingCircle(ctxReal, ctxDraft);
  });

  $('#drawing-curved-line').on('click', () => {
    currentFunction = new DrawingCurvedLine(ctxReal, ctxDraft);
  });

  $('#clear').on('click', () => {
    currentFunction = new ClearCanvas(ctxReal, ctxDraft);
    currentFunction.clear();
  });

  currentFunction = new DrawingLine(ctxReal, ctxDraft);
});