class DrawingCurvedLine extends PaintFunction {
  constructor(ctxReal, ctxDraft, drawColour) {
    super();
    this.ctxReal = ctxReal;
    this.ctxDraft = ctxDraft;
    this.drawColour = drawColour;
    this.clicked = 0;
  }

  onMouseDown(coord, e) {
    console.log('Mousedown');
    this.ctxReal.strokeStyle = this.drawColour;
    this.ctxReal.lineJoin = 'round';
    this.ctxReal.lineWidth = 5;
    
    if (this.clicked === 0) {
      this.origX = coord[0];
      this.origY = coord[1];
      this.clicked++;
    } else if (this.clicked === 1) {
      this.endX = coord[0];
      this.endY = coord[1];
      this.clicked++;
    }
  }

  onDragging(coord, e) {
    console.log('Dragging');
    this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.ctxDraft.strokeStyle = this.drawColour;
    this.ctxDraft.lineJoin = 'round';
    this.ctxDraft.lineWidth = 5;
    this.ctxDraft.moveTo(this.origX, this.origY);
    this.ctxDraft.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
    this.ctxDraft.stroke();
  }

  onMouseMove() {}

  onMouseUp(coord, e) {
    if (this.clicked === 2) {
      // reset coord
      this.clicked = 0;
      this.ctxDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.ctxReal.moveTo(this.origX, this.origY);
      this.ctxReal.quadraticCurveTo(coord[0], coord[1], this.endX, this.endY);
      this.ctxReal.stroke();
    }
  }

  onMouseLeave() {}

  onMouseEnter() {}
}