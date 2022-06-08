class DrawingCircle extends PaintFunction {
  constructor(ctxReal, ctxDraft, drawColour) {
    super();
    this.ctxReal = ctxReal;
    this.ctxDraft = ctxDraft;
    this.drawColour = drawColour;
    this.radius = null;
  }

  onMouseDown(coord, e) {
    this.ctxReal.fillStyle = this.drawColour;
    this.origX = coord[0];
    this.origY = coord[1];
  }

  onDragging(coord, e) {
    this.ctxDraft.fillStyle = this.drawColour;
    this.radius = Math.sqrt((coord[0] - this.origX)**2 + (coord[1] - this.origY)**2);
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxDraft.arc(this.origX, this.origY, this.radius, 0, 2*Math.PI);
    this.ctxDraft.fill();
  }

  onMouseMove() {}

  onMouseUp(coord) {
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxReal.arc(this.origX, this.origY, this.radius, 0, 2*Math.PI);
    this.ctxReal.fill();
  }

  onMouseLeave() {}

  onMouseEnter() {}

  // getRadius(origX, origY, coord) {
  //   const radius = Math.sqrt((coord[0] - origX)**2 + (coord[1] - origY)**2);
  //   return radius;
  // }
}