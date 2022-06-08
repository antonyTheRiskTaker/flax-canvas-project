class DrawingCircle extends PaintFunction {
  constructor(ctxReal, ctxDraft) {
    super();
    this.ctxReal = ctxReal;
    this.ctxDraft = ctxDraft;
    this.radius = undefined;
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
    this.radius = Math.sqrt((coord[0] - this.origX)**2 + (coord[1] - this.origY)**2);
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxDraft.beginPath();
    this.ctxDraft.arc(this.origX, this.origY, this.radius, 0, 2*Math.PI);
    this.ctxDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxReal.beginPath();
    this.ctxReal.arc(this.origX, this.origY, this.radius, 0, 2*Math.PI);
    this.ctxReal.stroke();
    this.radius = undefined;
  }

  onMouseLeave() {}

  onMouseEnter() {}
}