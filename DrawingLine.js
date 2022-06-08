class DrawingLine extends PaintFunction {
  constructor(ctxReal) {
    super();
    this.ctxReal = ctxReal;
  }

  onMouseDown(coord, e) {
    this.ctxReal.strokeStyle = drawColour;
    this.ctxReal.lineJoin = 'round';
    this.ctxReal.lineWidth = drawWidth;
    this.ctxReal.beginPath();
    this.ctxReal.moveTo(coord[0], coord[1]);
    this.draw(coord[0], coord[1]);
  }

  onDragging(coord, e) {
    this.draw(coord[0], coord[1]);
  }

  onMouseMove() {} // Assume it's not needed

  onMouseUp() {} // Assume it's not needed

  onMouseLeave() {} // Assume it's not needed

  onMouseEnter() {} // Assume it's not needed

  draw(x, y) {
    this.ctxReal.lineTo(x, y);
    this.ctxReal.moveTo(x, y);
    this.ctxReal.closePath();
    this.ctxReal.stroke();
  }
}