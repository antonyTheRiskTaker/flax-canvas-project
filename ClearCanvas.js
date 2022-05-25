class ClearCanvas extends PaintFunction {
  constructor(ctxReal) {
    super();
    this.ctxReal = ctxReal;
  }

  onMouseDown() {}

  onDragging() {}

  onMouseMove() {}

  onMouseUp() {}

  onMouseLeave() {}

  onMouseEnter() {}

  clear() {
    this.ctxReal.fillStyle = 'white';
    this.ctxReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.ctxReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
  }
}