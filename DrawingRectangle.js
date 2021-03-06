class DrawingRectangle extends PaintFunction {
  constructor(ctxReal, ctxDraft) {
    super();
    this.ctxReal = ctxReal;
    this.ctxDraft = ctxDraft;
  }

  onMouseDown(coord, e) {
    this.ctxReal.strokeStyle = drawColour;
    this.ctxReal.lineWidth = drawWidth;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, e) {
    this.ctxDraft.strokeStyle = drawColour;
    this.ctxDraft.lineWidth = drawWidth;
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxDraft.strokeRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
  }

  onMouseMove() {} // Assume it's not needed

  onMouseUp(coord) {
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxReal.strokeRect(this.origX, this.origY, coord[0] - this.origX,  coord[1] - this.origY);
  }

  onMouseLeave() {} // Assume it's not needed

  onMouseEnter() {} // Assume it's not needed
}