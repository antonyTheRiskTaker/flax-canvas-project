$(() => {
  $('#drawing-line').on('click', () => {
    currentFunction = new DrawingLine(ctxReal, ctxDraft);
  });

  $('#drawing-straight-line').on('click', () => {
    console.log('draw sl clicked');
    currentFunction = new DrawingStraightLine(ctxReal, ctxDraft);
  });

  $('#drawing-rectangle').on('click', () => {
    currentFunction = new DrawingRectangle(ctxReal, ctxDraft);
  });

  currentFunction = new DrawingLine(ctxReal, ctxDraft);
});