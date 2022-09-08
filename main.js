$(() => {
  // (Line below) when clicked, it applies the selected class to the targeted button after it has removed the selected class from other button elements.
  $('button').on('click', e => {
    $('button').removeClass('selected');
    $(e.target).addClass('selected');
    console.log('selected added');
  });
  
  $('#drawing-line').on('click', () => {
    currentDrawingFunction = new DrawingLine(
      ctxReal
    );
  });

  $('#drawing-straight-line').on('click', () => {
    currentDrawingFunction = new DrawingStraightLine(
      ctxReal,
      ctxDraft
    );
  });

  $('#drawing-rectangle').on('click', () => {
    currentDrawingFunction = new DrawingRectangle(
      ctxReal,
      ctxDraft
    );
  });

  $('#drawing-circle').on('click', () => {
    currentDrawingFunction = new DrawingCircle(
      ctxReal,
      ctxDraft
    );
  });

  $('#drawing-curved-line').on('click', () => {
    currentDrawingFunction = new DrawingCurvedLine(
      ctxReal,
      ctxDraft
    );
  });

  $('#clear').on('click', () => {
    currentDrawingFunction = new ClearCanvas(
      ctxReal,
      ctxDraft
    );
    currentDrawingFunction.clear();
  });

  $('#eraser').on('click', () => {
    currentDrawingFunction = new DragAndDropEraser(
      ctxReal
    );
  })

  $('#colour-picker').on('input', () => {
    drawColour = pickColourField.value;
  });

  currentDrawingFunction = new DrawingLine(
    ctxReal
  );
});