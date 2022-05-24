$(() => {
  $('#drawing-line').on('click', () => {
    currentFunction = new DrawingLine(ctxReal, ctxDraft);
  });

  $('#drawing-rectangle').on('click', () => {
    console.log('draw rect clicked');
    currentFunction = new DrawingRectangle(ctxReal, ctxDraft);
  });

  currentFunction = new DrawingLine(ctxReal, ctxDraft);
});