class DrawingRectangle extends PaintFunction {
  constructor(ctxReal, ctxDraft, drawColour) {
    super();
    this.ctxReal = ctxReal;
    this.ctxDraft = ctxDraft;
    this.drawColour = drawColour;
  }

  onMouseDown(coord, e) {
    this.ctxReal.fillStyle = this.drawColour;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, e) {
    this.ctxDraft.fillStyle = this.drawColour;
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
  }

  onMouseMove() {} // Assume it's not needed

  onMouseUp(coord) {
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxReal.fillRect(this.origX, this.origY, coord[0] - this.origX,  coord[1] - this.origY);
  }

  onMouseLeave() {} // Assume it's not needed

  onMouseEnter() {} // Assume it's not needed
}