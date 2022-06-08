class DrawingLine extends PaintFunction {
  constructor(ctxReal, drawColour) {
    super();
    this.ctx = ctxReal;
  }

  onMouseDown(coord, e) {
    this.ctx.strokeStyle = drawColour;
    this.ctx.lineJoin = 'round';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(coord[0], coord[1]);
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
    this.ctx.lineTo(x, y);
    this.ctx.moveTo(x, y);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}