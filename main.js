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

  currentFunction = new DrawingLine(ctxReal, ctxDraft);
});