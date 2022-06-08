$(() => {
  $('#drawing-line').on('click', () => {
    currentDrawingFunction = new DrawingLine(
      ctxReal,
      // ctxDraft,
      drawColour
    );
  });

  $('#drawing-straight-line').on('click', () => {
    currentDrawingFunction = new DrawingStraightLine(
      ctxReal,
      ctxDraft,
      drawColour
    );
  });

  $('#drawing-rectangle').on('click', () => {
    currentDrawingFunction = new DrawingRectangle(
      ctxReal,
      ctxDraft,
      drawColour
    );
  });

  $('#drawing-circle').on('click', () => {
    currentDrawingFunction = new DrawingCircle(
      ctxReal,
      ctxDraft,
      drawColour
    );
  });

  $('#drawing-curved-line').on('click', () => {
    currentDrawingFunction = new DrawingCurvedLine(
      ctxReal,
      ctxDraft,
      drawColour
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
    drawColour = $('#colour-picker').value;
  });

  currentDrawingFunction = new DrawingLine(
    ctxReal,
    // ctxDraft,
    drawColour
  );
});