class DrawingCurvedLine extends PaintFunction {
  constructor(ctxReal, ctxDraft, drawColour) {
    super();
    this.ctxReal = ctxReal;
    this.ctxDraft = ctxDraft;
    this.drawColour = drawColour;
  }

  onMouseDown(coord, e) {
    this.ctxReal.strokeStyle = this.drawColour;
    this.ctxReal.lineJoin = 'round';
    this.ctxReal.lineWidth = 5;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, e) {
    this.ctxDraft.strokeStyle = this.drawColour;
    this.ctxDraft.lineJoin = 'round';
    this.ctxDraft.lineWidth = 5;
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxDraft.moveTo(this.origX, this.origY);
    this.ctxDraft.quadraticCurveTo(this.origX*1.5, this.origY*1.5, this.origX, this.origY*5); // Fill in the arguments
    this.ctxDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord, e) {
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxReal.moveTo(this.origX, this.origY);
    this.ctxReal.quadraticCurveTo(this.origX*1.5, this.origY*1.5, this.origX, this.origY*5); // Fill in the arguments
    this.ctxReal.stroke();
  }

  onMouseLeave() {}

  onMouseEnter() {}
}